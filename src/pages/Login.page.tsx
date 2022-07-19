import React, { useEffect, useState } from 'react';

// Styles
import { PageWrapper,FormInputWrapper, CheckBoxWrapper, PasswordWrapper, RowWrapper, Line} from '../Styles/Divs.styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel, PrimaryButton, LoginWithButton } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';

// Icons
import { MdOutlineAlternateEmail,MdLockOutline, MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

// react router
import { useNavigate, Link } from 'react-router-dom';

// Redux
import { login, selectUser } from '../services/auth.slice';
import { auth, signInWithEmailAndPassword, signInWithPopup, googleProvider } from '../services/auth.service';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../App/Store';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const user = useSelector(selectUser);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                })
            )
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const handleLoginWithGoogle = () => {
        signInWithPopup(auth,googleProvider)
        .then((userAuth) => {
            dispatch(
                login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName
                })
            )
        })
    }

    useEffect(() => {
        if(user){
            navigate("/");
        }
    }, [user]);

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
                    <PrimaryButton type="submit" style={{marginTop: "36px"}}>
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
                    <LoginWithButton style={{ background: "white" }} onClick={handleLoginWithGoogle} type="button" >
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