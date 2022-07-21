import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { usePosts } from '../hooks/usePosts';
import { PageTitle } from '../Styles/Titles.styles';
import { useNavigate } from 'react-router-dom';
import { PageWrapper } from '../Styles/Divs.styles';
import Header from '../Components/Header';
import { PrimaryButton } from '../Styles/Forms.styles';

const MyPosts = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user){
            navigate('/login');
        }
    },[user])
    
    const printPosts = () => {
        console.log();
        const userPosts = usePosts(user.uid);
        userPosts.then((posts) => {
            posts.forEach((post) => {
                console.log(post.data());
            })
        })
        .catch((error) => {
            console.log(error);
        })       
    }

    return (
        <PageWrapper>
            <Header/>
            <PageTitle>My posts</PageTitle>
            <PrimaryButton type='button' onClick={printPosts} > Print Posts </PrimaryButton>
        </PageWrapper>
    );
};

export default MyPosts;