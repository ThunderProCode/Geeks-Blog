import { initializeApp } from "firebase/app";
import { 
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
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

// Login with google
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth,googleProvider);
        const user = res.user;
        const q = query(collection(db,"users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if(docs.docs.length === 0){
            await addDoc(collection(db,"users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch(err:any) {
        console.log(err);
        alert(err.message);
    }
};

// Login with email and password
const logInWithEmailAndPassword = async (email: string, password:string) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (err:any) {
        console.log(err);
        alert(err.message);
    }
};

// Register with email and password
const registerWithEmailAndPassword = async (name:string,email:string,password:string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await addDoc(collection(db,"users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch(err:any){
        console.log(err);
        alert(err.message);
    }
};

// Reset password
const sendPasswordReset = async (email:string) => {
    try {
        await sendPasswordResetEmail(auth,email);
    } catch (err:any) {
        console.log(err);
        alert(err.message);
    }
};

// Logout
const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};