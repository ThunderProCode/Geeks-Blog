import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../Styles/Divs.styles';
import { useNavigate } from 'react-router-dom';
import Post from '../Components/Post';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { DocumentData } from 'firebase/firestore';
import { getAllPosts } from '../hooks/usePosts';
import { getElapsedTime } from '../utils/converters.util';
import { User } from 'firebase/auth';

const Feed = () => {

    const user:User = useSelector(selectUser);
    const navigate = useNavigate();
    const [posts,setPosts] = useState<DocumentData[]>([]);

    useEffect(() => {
        if(!user){
            navigate("/login");
        }else {
            getAllPosts()
            .then((allposts) => {
                setPosts(allposts);
                allposts.forEach((post) => {
                    console.log(getElapsedTime( post.postDate.toDate()));
                })
            })
        }
    },[user]);
    
    

    return (
        <PageWrapper>
            <Header></Header>
            <div style={{marginTop: '50px'}}>
                {
                    posts.map((post) => 
                        <Post imageUrl={post.postImageUrl} timeStamp={ getElapsedTime(post.postDate.toDate()) } displayName={ user.displayName }  key={post.postTitle} ></Post>
                    )
                }
            </div>
        </PageWrapper>
    );
};

export default Feed;