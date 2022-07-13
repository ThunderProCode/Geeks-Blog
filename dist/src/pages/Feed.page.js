import React, { useEffect } from 'react';
import { PageWrapper } from '../Styles/Divs.styles';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/auth.service';
import Post from '../Components/Post';
import Header from '../Components/Header';
const Feed = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, loading]);
    if (loading) {
        return (React.createElement("h1", null, "Loading...."));
    }
    return (React.createElement(PageWrapper, null,
        React.createElement(Header, null),
        React.createElement("div", { style: { marginTop: '50px' } },
            React.createElement(Post, null),
            React.createElement(Post, null),
            React.createElement(Post, null),
            React.createElement(Post, null))));
};
export default Feed;
