import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { selectLoading, selectProgress } from '../services/posts.slice';
// Services
import { createPost } from '../services/posts.service';
const PostForm = () => {
    const loading = useSelector(selectLoading);
    const progress = useSelector(selectProgress);
    const user = useSelector(selectUser);
    const [image, setImage] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (!user)
            navigate('/login');
    }, [user]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (image) {
            createPost(image, user, postTitle);
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
                    progress,
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
