import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection ,Timestamp} from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const createPost = async (uid:string,title:string,file:File) => {
    const storageRef = ref(storage, `imgsPosts/${uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
        snapshot => {
            const percentage = snapshot.bytesTransferred/ snapshot.totalBytes * 100
        },
        (error) => {
            console.log(error);   
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                addDoc(collection(db,"posts"), {
                    userId: uid,
                    postTitle: title,
                    postDate: Timestamp.fromDate(new Date()),
                    postImageUrl: downloadURL,
                });
                console.log('Post uploaded');
            }).catch(err => {
                console.log(err);
            })
        }
    )    
}

