import React, { useEffect } from 'react';
import { PageTitle } from '../Styles/Titles.styles';
import { logout } from '../services/auth.service';
import { PrimaryButton } from '../Styles/Forms.styles';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/auth.service';
const Feed = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading)
            return;
        if (!user) {
            navigate("/login");
        }
    }, [user, loading]);
    const handleLogOut = () => {
        logout();
    };
    return (React.createElement("div", null,
        React.createElement(PageTitle, null, "Feed"),
        React.createElement(PrimaryButton, { onClick: handleLogOut }, "Logout")));
};
export default Feed;
