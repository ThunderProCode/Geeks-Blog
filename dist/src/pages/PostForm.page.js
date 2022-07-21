import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// Styles
import Header from '../Components/Header';
import { Form, TextInput, Label, PrimaryButton } from '../Styles/Forms.styles';
import { FormInputWrapper, PageWrapper } from '../Styles/Divs.styles';
import { BsCamera } from 'react-icons/bs';
import { PageTitle, Text } from '../Styles/Titles.styles';
import { Loader } from '../Styles/Animations.styles';
// Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { selectLoading, selectProgress } from '../services/posts.slice';
// Services
import { createPost, uploadFile } from '../services/posts.service';
import { updateLoading, updateProgress } from '../services/posts.slice';
import { getDownloadURL } from 'firebase/storage';
const PostForm = () => {
    const loading = useSelector(selectLoading);
    const progress = useSelector(selectProgress);
    const user = useSelector(selectUser);
    const [image, setImage] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (!user)
            navigate('/login');
    }, [user]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (image) {
            const uploadTask = uploadFile(user, image);
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
        }
    };
    const onFileChange = (e) => {
        setImage(e.target.files[0]);
    };
    const onTitleChange = (e) => {
        setPostTitle(e.target.value);
    };
    if (loading) {
        return (React.createElement(React.Fragment, null,
            React.createElement(PageWrapper, null,
                React.createElement(Text, null,
                    "Loading ",
                    progress.value,
                    " %"),
                React.createElement(Loader, { style: { marginTop: '24px' } }))));
    }
    return (React.createElement(PageWrapper, null,
        React.createElement(Header, null),
        React.createElement(PageTitle, null, "New post"),
        React.createElement(Form, { onSubmit: handleSubmit },
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { style: { fontSize: '14px', fontWeight: 'bold' } }, "Title: "),
                React.createElement(TextInput, { type: "text", style: { marginLeft: '12px' }, onChange: onTitleChange })),
            React.createElement("div", { style: { marginTop: '24px', marginBottom: '24px', textAlign: 'center', padding: '3%', border: '2px solid white', borderRadius: '4px' } },
                React.createElement("label", { htmlFor: "inputFileTag", style: { color: 'white', cursor: 'pointer' } },
                    "Select Image",
                    React.createElement("br", null),
                    React.createElement(BsCamera, { style: { color: 'white' } }),
                    React.createElement("input", { id: 'inputFileTag', type: "file", style: { display: 'none' }, onChange: onFileChange }),
                    image ? React.createElement("p", null, image.name) : React.createElement("p", null, "Image not selected"))),
            React.createElement(PrimaryButton, { type: 'submit' }, "Post"))));
};
export default PostForm;
