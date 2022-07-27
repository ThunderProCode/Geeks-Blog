import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { usePosts } from '../hooks/usePosts';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Post from '../Components/Post';
import { PageWrapper } from '../Styles/Divs.styles';
import { getElapsedTime } from '../utils/converters.util';
import { Text } from '../Styles/Titles.styles';
const MyPosts = () => {
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
        else {
            usePosts(user.uid)
                .then((userPosts) => {
                setPosts(userPosts);
            });
        }
    }, [user]);
    if (posts.length === 0) {
        return (React.createElement(PageWrapper, null,
            React.createElement(Header, { pageTitle: 'MyPosts' }),
            React.createElement(Text, null, "You haven't posted anything yet")));
    }
    return (React.createElement(PageWrapper, null,
        React.createElement(Header, { pageTitle: 'MyPosts' }),
        React.createElement("div", { style: { marginTop: '50px' } }, posts.map((post) => React.createElement(Post, { postTime: getElapsedTime(post.postDate.toDate()), imageUrl: post.postImageUrl, uid: post.userId, key: post.postTitle })))));
};
export default MyPosts;
