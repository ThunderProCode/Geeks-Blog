import { User } from 'firebase/auth';
import { addDoc, collection, query, where,getDocs} from 'firebase/firestore';
import { db } from '../firebase';

// Create a new user in db
export const addUserToDb = (user:User) => {
    addDoc(collection(db,"users"), {
        userId: user.uid,
        displayName: user.displayName,
        memberSince: user.metadata.creationTime,
        profilePic: user.photoURL
    })
    .catch((err) => {
        console.log(err)
    })
}

// Check if user exists 
export const userExists = async (uid:string):Promise<boolean> => {
    const q = query(collection(db,"users"), where("uid","==", uid))
    const querySnapshot = await getDocs(q);
    if(querySnapshot.docs){
        return false;
    }
    return true;
}
