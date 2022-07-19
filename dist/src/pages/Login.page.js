import React, { useEffect, useState } from 'react';
// Styles
import { PageWrapper, FormInputWrapper, CheckBoxWrapper, PasswordWrapper, RowWrapper, Line } from '../Styles/Divs.styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel, PrimaryButton, LoginWithButton } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';
// Icons
import { MdOutlineAlternateEmail, MdLockOutline, MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
// react router
import { useNavigate, Link } from 'react-router-dom';
// Redux
import { login, selectUser } from '../services/auth.slice';
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from '../services/auth.service';
import { useSelector, useDispatch } from 'react-redux';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }));
        })
            .catch((err) => {
            console.log(err);
        });
    };
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName
            }));
        });
    };
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);
    return (React.createElement(React.Fragment, null,
        React.createElement(PageWrapper, null,
            React.createElement(PageTitle, null, "GEEKS BLOG"),
            React.createElement(Form, { onSubmit: handleSubmit },
                React.createElement(FormInputWrapper, null,
                    React.createElement(Label, { htmlFor: "email" },
                        React.createElement(MdOutlineAlternateEmail, null)),
                    React.createElement(TextInput, { type: "email", name: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email" })),
                React.createElement(FormInputWrapper, null,
                    React.createElement(Label, { htmlFor: "password" },
                        React.createElement(MdLockOutline, null)),
                    React.createElement(TextInput, { type: "password", name: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter your password" })),
                React.createElement(PasswordWrapper, null,
                    React.createElement(CheckBoxWrapper, null,
                        React.createElement(CheckBox, { type: "checkbox" }),
                        React.createElement(CheckBoxLabel, null, "Remember me")),
                    React.createElement("a", { href: "" }, "Forgot Password?")),
                React.createElement(PrimaryButton, { type: "submit", style: { marginTop: "36px" } }, "Login"),
                React.createElement(RowWrapper, null,
                    React.createElement(Line, null),
                    React.createElement(Text, null, "or"),
                    React.createElement(Line, null)),
                React.createElement(LoginWithButton, { style: { background: "#4267B2" } },
                    React.createElement(MdOutlineFacebook, null),
                    React.createElement("span", null, "Login with Facebook")),
                React.createElement(LoginWithButton, { style: { background: "white" }, onClick: handleLoginWithGoogle, type: "button" },
                    React.createElement(FcGoogle, null),
                    React.createElement("span", null, "Login with google")),
                React.createElement(RowWrapper, { style: { marginTop: "120px" } },
                    React.createElement(Text, null, "Don't have an account?"),
                    React.createElement(Link, { to: "/register" }, "Signup here"))))));
};
export default Login;
