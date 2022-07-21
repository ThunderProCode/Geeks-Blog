import { auth, googleProvider } from '../firebase';
import { login } from './auth.slice';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';

//const dispatch = useDispatch<AppDispatch>();

export const signup = async (email:string,password:string) => {
    return createUserWithEmailAndPassword(auth,email,password)
    .catch((err) => {
        if(err.code === 'auth/email-already-in-use'){
            toast.error('Email already in use');
        } else if(err.code === 'auth/weak-password'){
            toast.error('Weak password');
        }else {
            console.log(err);
        }
    })
}

export const signIn = async (email:string,password:string) => {
    return signInWithEmailAndPassword(auth,email,password)
    .catch((err) => {
        if(err.code === 'auth/invalid-credential'){
            toast.error("Invalid Credentials")
        } else if(err.code === 'auth/user-not-found'){
            toast.error("Account not found")
        } else if(err.code === 'auth/wrong-password'){
            toast.error("Wrong password")
        } else if(err.code === 'auth/invalid-email'){
            toast.error("Invalid email")
        } else {
            console.log(err);
        }
    })
}

export const signInWithGoogle = async () => {
    return signInWithPopup(auth,googleProvider)
    .catch((err) => {
        toast.error(err.message)
    })
}

export const passwordReset = (email:string) => {
    sendPasswordResetEmail(auth,email)
    .catch((err) => {
        toast.error(err.message);
    })
}

export const logoutOfApp = () => {
    return signOut(auth);
}

