import React from "react";
import { FormInputWrapper, PageWrapper, RowWrapper, Line } from "../Styles/Divs.styles";
import { Form, Label, PrimaryButton, TextInput, LoginWithButton } from "../Styles/Forms.styles";
import { PageTitle,Text } from "../Styles/Titles.styles";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail,MdLockOutline,MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <PageWrapper>
            <PageTitle>Register</PageTitle>
            <Form>
                <FormInputWrapper>
                    <Label htmlFor="username">
                        <AiOutlineUser/>
                    </Label>
                    <TextInput 
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                    />
                </FormInputWrapper>
                <FormInputWrapper>
                    <Label htmlFor="email">
                        <MdOutlineAlternateEmail/>
                    </Label>
                    <TextInput 
                        type="emai"
                        placeholder="Enter your email"
                        name="email"
                    />
                </FormInputWrapper>
                <FormInputWrapper>
                    <Label htmlFor="password">
                        <MdLockOutline/>
                    </Label>
                    <TextInput 
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                    />
                </FormInputWrapper>
                <FormInputWrapper>
                    <Label htmlFor="password2">
                        <MdLockOutline/>
                    </Label>
                    <TextInput 
                        type="password"
                        placeholder="Confirm your password"
                        name="password2"
                    />
                </FormInputWrapper>
                <PrimaryButton style={{ marginTop: "36px" }}>Signup</PrimaryButton>
                <RowWrapper>
                        <Line/>
                        <Text>or</Text>
                        <Line/>
                    </RowWrapper>
                    <LoginWithButton style={{ background: "#4267B2" }} >
                        <MdOutlineFacebook/>
                        <span>Login with Facebook</span>
                    </LoginWithButton>
                    <LoginWithButton style={{ background: "white" }}>
                        <FcGoogle/>
                        <span>Login with google</span>
                    </LoginWithButton>
            </Form>
        </PageWrapper>
    );
}

export default Register;