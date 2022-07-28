import React from 'react';
import { MenuUl } from '../Styles/Menu.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../services/auth.slice';
import { logoutOfApp } from '../services/auth.service';
import { MenuWrapper } from '../Styles/Divs.styles';
const SideMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        logoutOfApp();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(MenuWrapper, null,
            React.createElement(MenuUl, null,
                React.createElement("li", null,
                    React.createElement(Link, { to: '/' }, "Feed")),
                React.createElement("li", null,
                    React.createElement(Link, { to: '/newPost' }, "New Post")),
                React.createElement("li", null,
                    React.createElement(Link, { to: '/myPosts' }, "My posts")),
                React.createElement("li", null,
                    React.createElement("a", { href: "", onClick: handleLogout }, "Logout"))))));
};
export default SideMenu;
