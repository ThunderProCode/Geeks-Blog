import React, { useEffect, useState } from "react";

// Styles
import { FormInputWrapper, PageWrapper, RowWrapper, Line } from "../Styles/Divs.styles";
import { Form, Label, PrimaryButton, TextInput, LoginWithButton } from "../Styles/Forms.styles";
import { PageTitle,Text } from "../Styles/Titles.styles";

// Router
import { useNavigate } from 'react-router-dom';

// Icons
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineAlternateEmail,MdLockOutline,MdOutlineFacebook } from "react-icons/md";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from "../App/Store";
import { createUserWithEmailAndPassword,auth } from '../services/auth.service';
import { login, selectUser } from "../services/auth.slice";

const Register = () => {

    const user = useSelector(selectUser);
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2 ] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();


    const handleSubmit = (e:React.FormEvent) => {
            e.preventDefault();
            if(!name){
                return alert('Please enter name');
            }
            
            if(password === password2){
                createUserWithEmailAndPassword(auth,email,password)
                .then((userAuth) => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                    }))
                })
                .catch((err) => {
                    alert(err);
                })
            }
    }

    const handleSignUpWithGoogle = () => {
        console.log('Google signup');
    }

    useEffect( () => {
        if(user) navigate("/");
    },[user]);

    return (
        <PageWrapper>
            <PageTitle>Register</PageTitle>
            <Form onSubmit={handleSubmit}>

                {/* Name Input */}
                <FormInputWrapper>
                    <Label htmlFor="name">
                        <AiOutlineUser/>
                    </Label>
                    <TextInput 
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </FormInputWrapper>
                {/* Email Input */}
                <FormInputWrapper>
                    <Label htmlFor="email">
                        <MdOutlineAlternateEmail/>
                    </Label>
                    <TextInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </FormInputWrapper>
                {/* Password Input */}
                <FormInputWrapper>
                    <Label htmlFor="password">
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
                {/* Confirm Password Input */}
                <FormInputWrapper>
                    <Label htmlFor="password2">
                        <MdLockOutline/>
                    </Label>
                    <TextInput 
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        placeholder="Confirm your password"
                    />
                </FormInputWrapper>
                {/* Signup Button */}
                <PrimaryButton type="submit" style={{ marginTop: "36px" }}>
                    Signup
                </PrimaryButton>
                {/* Divisory line */}
                <RowWrapper>
                        <Line/>
                        <Text>or</Text>
                        <Line/>
                    </RowWrapper>
                {/* Login with facebook Button */}                    
                <LoginWithButton style={{ background: "#4267B2" }} >
                  <MdOutlineFacebook/>
                    <span>Login with Facebook</span>
                </LoginWithButton>
                {/* Login with google Button */}
                <LoginWithButton style={{ background: "white" }} onClick={handleSignUpWithGoogle}>
                    <FcGoogle/>
                    <span>Login with google</span>
                </LoginWithButton>
            </Form>
        </PageWrapper>
    );
}

export default Register;