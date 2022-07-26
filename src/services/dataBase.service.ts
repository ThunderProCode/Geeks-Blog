import { User } from 'firebase/auth';
import { addDoc, collection, query, where,getDocs} from 'firebase/firestore';
import { db } from '../firebase';

// Create a new user in db
export const addUserToDb = (userId:string, name:string, creationTime:string,photoUrl: string, userEmail:string) => {
    addDoc(collection(db,"users"), {
        displayName: name,
        email: userEmail,
        memberSince: creationTime,
        profilePic: photoUrl,
        uid: userId,
    })
    .catch((err) => {
        console.log(err)
    })
}

// Check if user exists 
export const userExists = async (uid:string):Promise<boolean> => {
    const q = query(collection(db,"users"), where("uid","==", uid))
    const querySnapshot = await getDocs(q)
    if(querySnapshot.size > 0){
        return true;
    }
    return false;
}
