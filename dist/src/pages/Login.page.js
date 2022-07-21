import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// Styles
import { PageWrapper, FormInputWrapper, CheckBoxWrapper, PasswordWrapper, RowWrapper, Line } from '../Styles/Divs.styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel, PrimaryButton, LoginWithButton } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';
// Icons
import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
// react router
import { useNavigate, Link } from 'react-router-dom';
// Redux
import { selectUser, updateRememberUser } from '../services/auth.slice';
import { signIn, signInWithGoogle } from '../services/auth.service';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../services/auth.slice';
const Login = () => {
    // States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(selectUser);
    // Functions
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // Executes when Sign In button is clicked
    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(email, password)
            .then((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                }));
            }
        });
    };
    // Executes when Sign In whith google button is clicked
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((userAuth) => {
            if (userAuth) {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                }));
            }
        });
    };
    // Updates the remember user state
    const handleChange = (e) => {
        const target = e.target;
        dispatch(updateRememberUser({
            rememberUser: target.checked
        }));
    };
    useEffect(() => {
        if (user) {
            toast.success("Login Successful");
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
                        React.createElement(CheckBox, { type: "checkbox", onChange: handleChange }),
                        React.createElement(CheckBoxLabel, null, "Remember me")),
                    React.createElement(Link, { to: "/passwordReset" }, "Forgot Password?")),
                React.createElement(PrimaryButton, { type: "submit", style: { marginTop: "36px" } }, "Login"),
                React.createElement(RowWrapper, null,
                    React.createElement(Line, null),
                    React.createElement(Text, null, "or"),
                    React.createElement(Line, null)),
                React.createElement(LoginWithButton, { style: { background: "white" }, onClick: handleGoogleLogin, type: "button" },
                    React.createElement(FcGoogle, null),
                    React.createElement("span", null, "Login with google")),
                React.createElement(RowWrapper, { style: { marginTop: "120px" } },
                    React.createElement(Text, null, "Don't have an account?"),
                    React.createElement(Link, { to: "/register" }, "Signup here"))))));
};
export default Login;
