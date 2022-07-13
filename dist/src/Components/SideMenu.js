import React from 'react';
import { logout } from '../services/auth.service';
import { MenuUl } from '../Styles/Menu.styles';
import { Link } from 'react-router-dom';
const SideMenu = () => {
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
                React.createElement("a", { href: "" }, "My posts")),
            React.createElement("li", null,
                React.createElement("a", { href: "" }, "Settings")),
            React.createElement("li", null,
                React.createElement("a", { href: "", onClick: logout }, "Logout")))));
};
export default SideMenu;
