var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export const createPost = (uid, title, file) => __awaiter(void 0, void 0, void 0, function* () {
    const storageRef = ref(storage, `imgsPosts/${uid}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', snapshot => {
        const percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
    }, (error) => {
        console.log(error);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addDoc(collection(db, "posts"), {
                userId: uid,
                postTitle: title,
                postDate: Timestamp.fromDate(new Date()),
                postImageUrl: downloadURL,
            });
            console.log('Post uploaded');
        }).catch(err => {
            console.log(err);
        });
    });
});
