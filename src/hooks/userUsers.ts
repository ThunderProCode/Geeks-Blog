import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const getUserByUid = async (uid:string) => {
    const q = query(collection(db,"users"), where("uid","==", uid));
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs[0].data();
} 