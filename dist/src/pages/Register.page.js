import React, { useEffect, useState } from "react";
// Styles
import { FormInputWrapper, PageWrapper, RowWrapper, Line } from "../Styles/Divs.styles";
import { Form, Label, PrimaryButton, TextInput, LoginWithButton } from "../Styles/Forms.styles";
import { PageTitle, Text } from "../Styles/Titles.styles";
// Router
import { useNavigate } from 'react-router-dom';
// Icons
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail, MdLockOutline, MdOutlineFacebook } from "react-icons/md";
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createUserWithEmailAndPassword, auth } from '../services/auth.service';
import { login, selectUser } from "../services/auth.slice";
const Register = () => {
    const user = useSelector(selectUser);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            return alert('Please enter name');
        }
        if (password === password2) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                }));
            })
                .catch((err) => {
                alert(err);
            });
        }
    };
    const handleSignUpWithGoogle = () => {
        console.log('Google signup');
    };
    useEffect(() => {
        if (user)
            navigate("/");
    }, [user]);
    return (React.createElement(PageWrapper, null,
        React.createElement(PageTitle, null, "Register"),
        React.createElement(Form, { onSubmit: handleSubmit },
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "name" },
                    React.createElement(AiOutlineUser, null)),
                React.createElement(TextInput, { type: "text", placeholder: "Enter your name", name: "name", value: name, onChange: (e) => setName(e.target.value) })),
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "email" },
                    React.createElement(MdOutlineAlternateEmail, null)),
                React.createElement(TextInput, { type: "email", name: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email" })),
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "password" },
                    React.createElement(MdLockOutline, null)),
                React.createElement(TextInput, { type: "password", name: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter your password" })),
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "password2" },
                    React.createElement(MdLockOutline, null)),
                React.createElement(TextInput, { type: "password", name: "password2", value: password2, onChange: (e) => setPassword2(e.target.value), placeholder: "Confirm your password" })),
            React.createElement(PrimaryButton, { type: "submit", style: { marginTop: "36px" } }, "Signup"),
            React.createElement(RowWrapper, null,
                React.createElement(Line, null),
                React.createElement(Text, null, "or"),
                React.createElement(Line, null)),
            React.createElement(LoginWithButton, { style: { background: "#4267B2" } },
                React.createElement(MdOutlineFacebook, null),
                React.createElement("span", null, "Login with Facebook")),
            React.createElement(LoginWithButton, { style: { background: "white" }, onClick: handleSignUpWithGoogle },
                React.createElement(FcGoogle, null),
                React.createElement("span", null, "Login with google")))));
};
export default Register;
