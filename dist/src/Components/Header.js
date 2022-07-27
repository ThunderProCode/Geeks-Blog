import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideMenu from './SideMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
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
        React.createElement("header", { style: {
                width: '90%',
                height: '5%',
                position: 'fixed',
                top: '0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'black',
                zIndex: '1'
            } },
            React.createElement(GiHamburgerMenu, { style: { color: 'white', fontSize: '20px' }, onClick: toggleMenu }),
            React.createElement("h1", { style: { color: 'white', fontSize: '24px' } }, props.pageTitle),
            React.createElement("img", { src: profilePicture, alt: "", style: {
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                } }))));
};
export default Header;
