import React from 'react';
import { PageWrapper,FormInputWrapper, CheckBoxWrapper, PasswordWrapper} from '../Styles/Divs.Styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel } from '../Styles/Forms.styles';
import { PageTitle } from '../Styles/Titles.styles';
import { MdOutlineAlternateEmail,MdLockOutline } from "react-icons/md";

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
                </Form>
            </PageWrapper>
        </>
    );
};

export default Login;