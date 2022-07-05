import React from 'react';
import { PageWrapper, FormInputWrapper, CheckBoxWrapper, PasswordWrapper, RowWrapper, Line } from '../Styles/Divs.styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel, PrimaryButton, LoginWithButton } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';
import { MdOutlineAlternateEmail, MdLockOutline, MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(PageWrapper, null,
            React.createElement(PageTitle, null, "GEEKS BLOG"),
            React.createElement(Form, null,
                React.createElement(FormInputWrapper, null,
                    React.createElement(Label, { htmlFor: "email" },
                        React.createElement(MdOutlineAlternateEmail, null)),
                    React.createElement(TextInput, { type: "email", name: "email", placeholder: "Enter your email" })),
                React.createElement(FormInputWrapper, null,
                    React.createElement(Label, { htmlFor: "password" },
                        React.createElement(MdLockOutline, null)),
                    React.createElement(TextInput, { type: "password", name: "password", placeholder: "Enter your password" })),
                React.createElement(PasswordWrapper, null,
                    React.createElement(CheckBoxWrapper, null,
                        React.createElement(CheckBox, { type: "checkbox" }),
                        React.createElement(CheckBoxLabel, null, "Remember me")),
                    React.createElement("a", { href: "" }, "Forgot Password?")),
                React.createElement(PrimaryButton, { style: { marginTop: "36px" } }, "Login"),
                React.createElement(RowWrapper, null,
                    React.createElement(Line, null),
                    React.createElement(Text, null, "or"),
                    React.createElement(Line, null)),
                React.createElement(LoginWithButton, { style: { background: "#4267B2" } },
                    React.createElement(MdOutlineFacebook, null),
                    React.createElement("span", null, "Login with Facebook")),
                React.createElement(LoginWithButton, { style: { background: "white" } },
                    React.createElement(FcGoogle, null),
                    React.createElement("span", null, "Login with google")),
                React.createElement(RowWrapper, { style: { marginTop: "120px" } },
                    React.createElement(Text, null, "Don't have an account?"),
                    React.createElement("a", { href: "" }, "Signup here"))))));
};
export default Login;
