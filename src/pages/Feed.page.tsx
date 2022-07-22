import React, { useEffect } from 'react';
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
                <Post imageUrl={'https://cnnespanol.cnn.com/wp-content/uploads/2021/10/211012095305-lego-full-169.jpg?quality=100&strip=info'} ></Post>
                <Post imageUrl={'https://cnnespanol.cnn.com/wp-content/uploads/2021/10/211012095305-lego-full-169.jpg?quality=100&strip=info'} ></Post>
                <Post imageUrl={'https://cnnespanol.cnn.com/wp-content/uploads/2021/10/211012095305-lego-full-169.jpg?quality=100&strip=info'} ></Post>
                <Post imageUrl={'https://cnnespanol.cnn.com/wp-content/uploads/2021/10/211012095305-lego-full-169.jpg?quality=100&strip=info'} ></Post>
            </div>
        </PageWrapper>
    );
};

export default Feed;