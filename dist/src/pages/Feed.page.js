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
                allposts.forEach((post) => {
                    console.log(getElapsedTime(post.postDate.toDate()));
                });
            });
        }
    }, [user]);
    return (React.createElement(PageWrapper, null,
        React.createElement(Header, null),
        React.createElement("div", { style: { marginTop: '50px' } }, posts.map((post) => React.createElement(Post, { imageUrl: post.postImageUrl, timeStamp: getElapsedTime(post.postDate.toDate()), displayName: user.displayName, key: post.postTitle })))));
};
export default Feed;
