var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc } from "firebase/firestore";
import { firebaseConfig } from "../firebase";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
// Login with google
const signInWithGoogle = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = yield getDocs(q);
        if (docs.docs.length === 0) {
            yield addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
});
// Login with email and password
const logInWithEmailAndPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
});
// Register with email and password
const registerWithEmailAndPassword = (name, email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        yield addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
});
// Reset password
const sendPasswordReset = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sendPasswordResetEmail(auth, email);
    }
    catch (err) {
        console.log(err);
        alert(err.message);
    }
});
// Logout
const logout = () => {
    signOut(auth);
};
export { auth, db, signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, logout, };
