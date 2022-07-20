import { firebaseConfig } from "../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { addDoc, collection, Timestamp, ref, uploadBytesResumable, getDownloadURL, storage, db };
