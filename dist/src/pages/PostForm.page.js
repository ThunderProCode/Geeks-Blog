import React, { useEffect, useState } from 'react';
// Styles
import Header from '../Components/Header';
import { Form, TextInput, Label, PrimaryButton } from '../Styles/Forms.styles';
import { FormInputWrapper, PageWrapper } from '../Styles/Divs.styles';
import { BsCamera } from 'react-icons/bs';
import { PageTitle } from '../Styles/Titles.styles';
// Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { createPost } from '../services/posts.service';
const PostForm = () => {
    const user = useSelector(selectUser);
    const [image, setImage] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        onPost();
    };
    const onFileChange = (e) => {
        setImage(e.target.files[0]);
    };
    const onTitleChange = (e) => {
        setPostTitle(e.target.value);
    };
    const onPost = () => {
        if (image) {
            createPost(user.uid, postTitle, image);
        }
    };
    useEffect(() => {
        if (!user)
            navigate('/login');
    }, [user]);
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
                    React.createElement("input", { id: 'inputFileTag', type: "file", style: { display: 'none' }, onChange: onFileChange }))),
            React.createElement(PrimaryButton, { type: 'submit' }, "Post"))));
};
export default PostForm;
