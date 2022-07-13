import React, { useEffect } from 'react';
import { auth } from '../services/auth.service';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const PostForm = () => {

    const [user,loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user)navigate('/login');
    },[user,loading])

    if(loading){
        return(<h1>Loading....</h1>);
    }

    return (
        <>
            <Header/>
            <div style={{ color: 'white' }} >
                Create new post
            </div>
        </>
    );
};

export default PostForm;