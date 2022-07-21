var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { auth, googleProvider } from '../firebase';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
//const dispatch = useDispatch<AppDispatch>();
export const signup = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    return createUserWithEmailAndPassword(auth, email, password)
        .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
            toast.error('Email already in use');
        }
        else if (err.code === 'auth/weak-password') {
            toast.error('Weak password');
        }
        else {
            console.log(err);
        }
    });
});
export const signIn = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    return signInWithEmailAndPassword(auth, email, password)
        .catch((err) => {
        if (err.code === 'auth/invalid-credential') {
            toast.error("Invalid Credentials");
        }
        else if (err.code === 'auth/user-not-found') {
            toast.error("Account not found");
        }
        else if (err.code === 'auth/wrong-password') {
            toast.error("Wrong password");
        }
        else if (err.code === 'auth/invalid-email') {
            toast.error("Invalid email");
        }
        else {
            console.log(err);
        }
    });
});
export const signInWithGoogle = () => __awaiter(void 0, void 0, void 0, function* () {
    return signInWithPopup(auth, googleProvider)
        .catch((err) => {
        toast.error(err.message);
    });
});
export const passwordReset = (email) => {
    sendPasswordResetEmail(auth, email)
        .catch((err) => {
        toast.error(err.message);
    });
};
export const logoutOfApp = () => {
    return signOut(auth);
};
