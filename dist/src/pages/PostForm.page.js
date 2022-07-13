import React, { useEffect } from 'react';
import { auth } from '../services/auth.service';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
const PostForm = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user)
            navigate('/login');
    }, [user, loading]);
    if (loading) {
        return (React.createElement("h1", null, "Loading...."));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("div", { style: { color: 'white' } }, "Create new post")));
};
export default PostForm;
