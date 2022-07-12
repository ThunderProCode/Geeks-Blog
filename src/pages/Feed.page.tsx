import React, { useEffect } from 'react';
import { PageWrapper } from '../Styles/Divs.styles';
import { PageTitle } from '../Styles/Titles.styles';
import { logout } from '../services/auth.service';
import { PrimaryButton } from '../Styles/Forms.styles';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth} from '../services/auth.service';
import Post from '../Components/Post';
import Header from '../Components/Header';

const Feed = () => {

    const [user,loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading)return;
        if(!user){
            navigate("/login");
        }
    },[user,loading]);

    const handleLogOut = () => {
        logout();
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
            <PrimaryButton onClick={handleLogOut} >Logout</PrimaryButton>
        </PageWrapper>
    );
};

export default Feed;