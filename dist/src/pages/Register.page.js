import React, { useEffect, useState } from "react";
import { FormInputWrapper, PageWrapper, RowWrapper, Line } from "../Styles/Divs.styles";
import { Form, Label, PrimaryButton, TextInput, LoginWithButton } from "../Styles/Forms.styles";
import { PageTitle, Text } from "../Styles/Titles.styles";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail, MdLockOutline, MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../services/auth.service";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleSignUp = () => {
        if (!name) {
            alert("Please enter name");
        }
        else {
            if (password === password2) {
                registerWithEmailAndPassword(name, email, password);
            }
            else {
                alert("Both passwords must be the same");
            }
        }
    };
    useEffect(() => {
        if (loading)
            return;
        if (user)
            navigate("/");
    }, [user, loading]);
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
            React.createElement(PrimaryButton, { type: "submit", style: { marginTop: "36px" }, onClick: handleSignUp }, "Signup"),
            React.createElement(RowWrapper, null,
                React.createElement(Line, null),
                React.createElement(Text, null, "or"),
                React.createElement(Line, null)),
            React.createElement(LoginWithButton, { style: { background: "#4267B2" } },
                React.createElement(MdOutlineFacebook, null),
                React.createElement("span", null, "Login with Facebook")),
            React.createElement(LoginWithButton, { style: { background: "white" }, onClick: signInWithGoogle },
                React.createElement(FcGoogle, null),
                React.createElement("span", null, "Login with google")))));
};
export default Register;
