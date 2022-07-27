import React from 'react';
import { MenuUl } from '../Styles/Menu.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../services/auth.slice';
import { logoutOfApp } from '../services/auth.service';
const SideMenu = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        logoutOfApp();
    };
    return (React.createElement("div", { style: {
            background: 'black',
            width: '50%',
            height: '100%',
            position: 'fixed',
            zIndex: '2',
            top: '0',
            left: '0',
            marginTop: '40px',
        } },
        React.createElement(MenuUl, null,
            React.createElement("li", null,
                React.createElement(Link, { to: '/' }, "Feed")),
            React.createElement("li", null,
                React.createElement(Link, { to: '/newPost' }, "New Post")),
            React.createElement("li", null,
                React.createElement(Link, { to: '/myPosts' }, "My posts")),
            React.createElement("li", null,
                React.createElement("a", { href: "", onClick: handleLogout }, "Logout")))));
};
export default SideMenu;
