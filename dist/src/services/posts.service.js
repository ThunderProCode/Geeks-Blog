import { db, storage } from '../firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import { toast } from 'react-toastify';
export const uploadFile = (image, user, postTitle) => {
    const storageRef = ref(storage, `imgsPosts/${user.uid}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on('state_changed', (snapshot) => {
        const percent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
    }, (error) => {
        toast.error(error.message);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            createPost(user, postTitle, downloadURL);
        }).catch(err => {
            toast.error(err.message);
        });
    });
};
export const createPost = (user, postTitle, downloadURL) => {
    addDoc(collection(db, "posts"), {
        userId: user.uid,
        postTitle: postTitle,
        postDate: Timestamp.fromDate(new Date()),
        postImageUrl: downloadURL,
    })
        .catch((err) => {
        toast.error(err.message);
    });
    toast.success('Post created');
};
