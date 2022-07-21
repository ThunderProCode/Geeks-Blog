var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
export const usePosts = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = [];
    const q = query(collection(db, "posts"), where("userId", "==", uid));
    const querySnapshot = yield getDocs(q);
    querySnapshot.forEach((doc) => {
        posts.push(doc);
    });
    return posts;
});
