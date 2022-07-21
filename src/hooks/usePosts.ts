import { collection, query, where, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export const usePosts = async (uid:string):Promise<QueryDocumentSnapshot[]> => { 
    const posts:QueryDocumentSnapshot[] = [];
    const q = query(collection(db,"posts"), where("userId","==", uid));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
        posts.push(doc);
    })
    return posts;
}