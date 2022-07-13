import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideMenu from './SideMenu';
const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    const toggleMenu = () => {
        setDisplayMenu(!displayMenu);
    };
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
            React.createElement("h1", { style: { color: 'white', fontSize: '24px' } }, "Feed"),
            React.createElement("img", { src: "https://i.pinimg.com/originals/03/3f/c5/033fc537c42bfe4e2eb5b6e128a2d083.png", alt: "", style: {
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                } }))));
};
export default Header;
