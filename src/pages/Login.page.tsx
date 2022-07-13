import React, { useEffect, useState } from 'react';
import { PageWrapper,FormInputWrapper, CheckBoxWrapper, PasswordWrapper, RowWrapper, Line} from '../Styles/Divs.styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel, PrimaryButton, LoginWithButton } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';
import { MdOutlineAlternateEmail,MdLockOutline, MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle, logInWithEmailAndPassword } from '../services/auth.service';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user,loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
    }

    const handleLoginWithEmailAndPassword = () => {
        logInWithEmailAndPassword(email,password);
    }

    const handleLoginWithGoogle = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        if(loading){
            return;
        }

        if(user){
            navigate("/");
        }
    }, [user,loading]);

    return (
        <>
            <PageWrapper>
                <PageTitle>GEEKS BLOG</PageTitle>
                <Form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <FormInputWrapper>
                        <Label htmlFor="email" >
                            <MdOutlineAlternateEmail/>
                        </Label>
                        <TextInput
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail( e.target.value )}
                            placeholder="Enter your email"
                        />
                    </FormInputWrapper>
                     {/* Password Input */}
                    <FormInputWrapper>
                        <Label htmlFor="password" >
                            <MdLockOutline/>
                        </Label>

                        <TextInput
                            type="password"
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                        />
                    </FormInputWrapper>

                     {/* Remember user and password reset */}
                    <PasswordWrapper>
                        <CheckBoxWrapper>
                            <CheckBox type="checkbox" />
                            <CheckBoxLabel>Remember me</CheckBoxLabel>
                        </CheckBoxWrapper>
                        <a href="">Forgot Password?</a>
                    </PasswordWrapper>

                     {/* Login button */}
                    <PrimaryButton type="submit" style={{marginTop: "36px"}} onClick={handleLoginWithEmailAndPassword} >
                        Login
                    </PrimaryButton>

                     {/* Divisor line */}
                    <RowWrapper>
                        <Line/>
                        <Text>or</Text>
                        <Line/>
                    </RowWrapper>

                     {/* Login with facebook button */}
                    <LoginWithButton style={{ background: "#4267B2" }} >
                        <MdOutlineFacebook/>
                        <span>Login with Facebook</span>
                    </LoginWithButton>
                    
                     {/* Login with google button */}
                    <LoginWithButton style={{ background: "white" }} onClick={handleLoginWithGoogle} >
                        <FcGoogle/>
                        <span>Login with google</span>
                    </LoginWithButton>

                     {/* Signup */}
                    <RowWrapper style={{ marginTop: "120px" }} >
                        <Text>Don&apos;t have an account?</Text>
                        <Link to="/register">Signup here</Link>
                    </RowWrapper>

                </Form>
            </PageWrapper>
        </>
    );
};

export default Login;