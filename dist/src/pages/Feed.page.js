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
        if (!user) {
            navigate("/login");
        }
    }, [user]);
    return (React.createElement(PageWrapper, null,
        React.createElement(Header, null),
        React.createElement("div", { style: { marginTop: '50px' } },
            React.createElement(Post, null),
            React.createElement(Post, null),
            React.createElement(Post, null),
            React.createElement(Post, null))));
};
export default Feed;
