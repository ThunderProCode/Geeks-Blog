import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { MenuIcon } from '../Styles/Icons.styles';
import { TopHeader } from '../Styles/Divs.styles';
import { Link } from 'react-router-dom';
import { LargeMenuUl } from '../Styles/Menu.styles';
const Header = (props) => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const user = useSelector(selectUser);
    const [profilePicture, setProfilePicture] = useState("");
    const toggleMenu = () => {
        setDisplayMenu(!displayMenu);
    };
    useEffect(() => {
        if (user) {
            setProfilePicture(user.profilePic);
        }
    }, [user]);
    return (React.createElement(React.Fragment, null,
        displayMenu ? React.createElement(SideMenu, null) : React.createElement(React.Fragment, null),
        React.createElement(TopHeader, null,
            React.createElement("div", { style: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                } },
                React.createElement("h1", { style: { color: 'white', fontSize: '24px', justifySelf: 'center' } }, props.pageTitle),
                React.createElement(LargeMenuUl, null,
                    React.createElement("li", null,
                        React.createElement(Link, { to: '/' }, "Feed")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: '/newPost' }, "New Post")),
                    React.createElement("li", null,
                        React.createElement(Link, { to: '/myPosts' }, "My Posts")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "" }, "Logout"))),
                React.createElement(MenuIcon, { onClick: toggleMenu }),
                React.createElement("img", { src: profilePicture, alt: "", style: {
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                    } })))));
};
export default Header;
