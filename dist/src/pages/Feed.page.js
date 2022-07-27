import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../Styles/Divs.styles';
import { useNavigate } from 'react-router-dom';
import Post from '../Components/Post';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { getAllPosts } from '../hooks/usePosts';
import { getElapsedTime } from '../utils/converters.util';
const Feed = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
        else {
            getAllPosts()
                .then((allposts) => {
                setPosts(allposts);
            });
        }
    }, [user]);
    return (React.createElement(PageWrapper, null,
        React.createElement(Header, { pageTitle: 'Feed' }),
        React.createElement("div", { style: { marginTop: '50px' } }, posts.map((post) => React.createElement(Post, { postTime: getElapsedTime(post.postDate.toDate()), imageUrl: post.postImageUrl, uid: post.userId, key: post.postTitle })))));
};
export default Feed;
