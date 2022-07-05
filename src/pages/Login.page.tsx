import React from 'react';
import { PageWrapper,FormInputWrapper, CheckBoxWrapper, PasswordWrapper, RowWrapper, Line} from '../Styles/Divs.styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel, PrimaryButton, LoginWithButton } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';
import { MdOutlineAlternateEmail,MdLockOutline, MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <>
            <PageWrapper>
                <PageTitle>GEEKS BLOG</PageTitle>
                <Form>
                    <FormInputWrapper>
                        <Label htmlFor="email" >
                            <MdOutlineAlternateEmail/>
                        </Label>
                        <TextInput
                            type="email"
                            name="email" 
                            placeholder="Enter your email"
                        />
                    </FormInputWrapper>
                    <FormInputWrapper>
                        <Label htmlFor="password" >
                            <MdLockOutline/>
                        </Label>
                        <TextInput
                            type="password"
                            name="password" 
                            placeholder="Enter your password"
                        />
                    </FormInputWrapper>
                    <PasswordWrapper>
                        <CheckBoxWrapper>
                            <CheckBox type="checkbox" />
                            <CheckBoxLabel>Remember me</CheckBoxLabel>
                        </CheckBoxWrapper>
                        <a href="">Forgot Password?</a>
                    </PasswordWrapper>
                    <PrimaryButton style={{marginTop: "36px"}}>Login</PrimaryButton>
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
                    <RowWrapper style={{ marginTop: "120px" }} >
                        <Text>Don't have an account?</Text>
                        <a href="">Signup here</a>
                    </RowWrapper>
                </Form>
            </PageWrapper>
        </>
    );
};

export default Login;