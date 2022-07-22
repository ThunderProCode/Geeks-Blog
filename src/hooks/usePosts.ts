import { collection, query, where, getDocs, DocumentData } from 'firebase/firestore';
import { db } from '../firebase';

export const usePosts = async (uid:string):Promise<DocumentData[]> => { 
    const posts:DocumentData[] = [];
    const q = query(collection(db,"posts"), where("userId","==", uid));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        posts.push(doc.data());
    })
    return posts;
}