import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// Styles
import { PageWrapper,FormInputWrapper, CheckBoxWrapper, PasswordWrapper, RowWrapper, Line} from '../Styles/Divs.styles';
import { TextInput, Form, Label, CheckBox, CheckBoxLabel, PrimaryButton, LoginWithButton } from '../Styles/Forms.styles';
import { PageTitle, Text } from '../Styles/Titles.styles';

// Icons
import { MdOutlineAlternateEmail,MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

// react router
import { useNavigate, Link } from 'react-router-dom';

// Redux
import { AppDispatch } from '../App/Store';
import { login } from '../services/auth.slice';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, updateRememberUser } from '../services/auth.slice';

// Services
import { addUserToDb, userExists } from '../services/dataBase.service';
import { signIn, signInWithGoogle } from '../services/auth.service';

const Login = () => {

    // States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(selectUser);

    // Functions
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // Executes when Sign In button is clicked
    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        signIn(email,password)
        .then((userAuth) => {
            if(userAuth){
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profilePic: userAuth.user.photoURL
                    })
                )
            }
        })
    }

    // Executes when Sign In whith google button is clicked
    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then((userAuth) => {
            if(userAuth){
                const user = userAuth.user;
                userExists(user.uid)
                .then((res) => {
                    if(!res){
                        const creationTime = user.metadata.creationTime ? user.metadata.creationTime : "";
                        addUserToDb(user.uid,user.displayName,creationTime,user.photoURL,user.email);
                    }
                })
                dispatch(
                    login({
                        email:userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profilePic: userAuth.user.photoURL
                    })
                )
            }
        })
    }

    // Updates the remember user state
    const handleChange = (e:React.FormEvent) => {
        const target = e.target as HTMLInputElement
        dispatch(updateRememberUser({
            rememberUser: target.checked
        }))
    }

    useEffect(() => {
        if(user){
            toast.success("Login Successful");
            navigate("https://geeksblogs-45cf2.web.app/");
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
                            <CheckBox type="checkbox" onChange={handleChange}/>
                            <CheckBoxLabel >Remember me</CheckBoxLabel>
                        </CheckBoxWrapper>
                        <Link to="/passwordReset">Forgot Password?</Link>
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
                    
                     {/* Login with google button */}
                    <LoginWithButton style={{ background: "white" }} onClick={handleGoogleLogin} type="button" >
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