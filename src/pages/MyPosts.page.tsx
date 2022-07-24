import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { usePosts } from '../hooks/usePosts';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Post from '../Components/Post';
import { DocumentData } from 'firebase/firestore';
import { PageWrapper } from '../Styles/Divs.styles';
import { getElapsedTime } from '../utils/converters.util';

const MyPosts = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [ posts,setPosts ] = useState<DocumentData[]>([]);

    useEffect(() => {
        if(!user){
            navigate('/login');
        }else {
            usePosts(user.uid)
            .then((userPosts) => {
                setPosts(userPosts);
            });
        }
    },[user])

    return (        
        <PageWrapper>
            <Header/>
            <div style={{marginTop: '50px'}}>
            {
                posts.map((post) => <Post imageUrl={post.postImageUrl} timeStamp={ getElapsedTime(post.postDate.toDate())  } displayName={user.displayName}  key={post.postTitle}></Post>)
            }
            </div>
        </PageWrapper>
    );
};

export default MyPosts;