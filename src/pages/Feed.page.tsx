import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../Styles/Divs.styles';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth} from '../services/auth.service';
import Post from '../Components/Post';
import Header from '../Components/Header';

const Feed = () => {

    const [user,loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate("/login");
        }
    },[user,loading]);

    if(loading){
        return(
            <h1>Loading....</h1>
        );
    }

    return (
        <PageWrapper>
            <Header></Header>
            <div style={{marginTop: '50px'}}>
                <Post></Post>
                <Post></Post>
                <Post></Post>
                <Post></Post>
            </div>
        </PageWrapper>
    );
};

export default Feed;