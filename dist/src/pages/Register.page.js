import React from "react";
import { FormInputWrapper, PageWrapper, RowWrapper, Line } from "../Styles/Divs.styles";
import { Form, Label, PrimaryButton, TextInput, LoginWithButton } from "../Styles/Forms.styles";
import { PageTitle, Text } from "../Styles/Titles.styles";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail, MdLockOutline, MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
    return (React.createElement(PageWrapper, null,
        React.createElement(PageTitle, null, "Register"),
        React.createElement(Form, null,
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "username" },
                    React.createElement(AiOutlineUser, null)),
                React.createElement(TextInput, { type: "text", placeholder: "Enter your username", name: "username" })),
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "email" },
                    React.createElement(MdOutlineAlternateEmail, null)),
                React.createElement(TextInput, { type: "emai", placeholder: "Enter your email", name: "email" })),
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "password" },
                    React.createElement(MdLockOutline, null)),
                React.createElement(TextInput, { type: "password", placeholder: "Enter your password", name: "password" })),
            React.createElement(FormInputWrapper, null,
                React.createElement(Label, { htmlFor: "password2" },
                    React.createElement(MdLockOutline, null)),
                React.createElement(TextInput, { type: "password", placeholder: "Confirm your password", name: "password2" })),
            React.createElement(PrimaryButton, { style: { marginTop: "36px" } }, "Signup"),
            React.createElement(RowWrapper, null,
                React.createElement(Line, null),
                React.createElement(Text, null, "or"),
                React.createElement(Line, null)),
            React.createElement(LoginWithButton, { style: { background: "#4267B2" } },
                React.createElement(MdOutlineFacebook, null),
                React.createElement("span", null, "Login with Facebook")),
            React.createElement(LoginWithButton, { style: { background: "white" } },
                React.createElement(FcGoogle, null),
                React.createElement("span", null, "Login with google")))));
};
export default Register;
