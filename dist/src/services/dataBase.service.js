var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
// Create a new user in db
export const addUserToDb = (userId, name, creationTime, photoUrl, userEmail) => {
    addDoc(collection(db, "users"), {
        displayName: name,
        email: userEmail,
        memberSince: creationTime,
        profilePic: photoUrl,
        uid: userId,
    })
        .catch((err) => {
        console.log(err);
    });
};
// Check if user exists 
export const userExists = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = yield getDocs(q);
    if (querySnapshot.size > 0) {
        return true;
    }
    return false;
});
