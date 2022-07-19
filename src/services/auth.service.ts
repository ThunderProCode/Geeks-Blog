import { initializeApp } from "firebase/app";
import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { 
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc
} from "firebase/firestore";

import { firebaseConfig } from "../firebase";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Reset password
const sendPasswordReset = async (email:string) => {
    try {
        await sendPasswordResetEmail(auth,email);
    } catch (err:any) {
        console.log(err);
        alert(err.message);
    }
};

export {
    auth,
    db,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    onAuthStateChanged,
    googleProvider,
    query,
    getDocs,
    collection,
    where,
    addDoc,
};