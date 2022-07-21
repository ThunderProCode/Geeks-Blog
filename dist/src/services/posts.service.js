import { db, storage } from '../firebase';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage';
import { toast } from 'react-toastify';
import { updateProgress, updateLoading } from './posts.slice';
import { useDispatch } from 'react-redux';
export const uploadFile = (image, user, postTitle) => {
    const storageRef = ref(storage, `imgsPosts/${user.uid}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    const dispatch = useDispatch();
    uploadTask.on('state_changed', (snapshot) => {
        const percent = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
        dispatch(updateProgress({
            progress: percent
        }));
        dispatch(updateLoading({
            loading: true
        }));
    }, (error) => {
        toast.error(error.message);
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            createPost(user, postTitle, downloadURL);
            dispatch(updateLoading({
                loading: false
            }));
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
