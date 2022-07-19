import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../Styles/Divs.styles';
import { useNavigate } from 'react-router-dom';
import Post from '../Components/Post';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';

const Feed = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user){
            navigate("/login");
        }
    },[user]);

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