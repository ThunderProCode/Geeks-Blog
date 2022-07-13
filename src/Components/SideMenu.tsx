import React from 'react';
import { logout } from '../services/auth.service';
import { MenuUl } from '../Styles/Menu.styles';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div style={{
            background: 'black',
            width:'50%',
            height: '100%',
            position: 'fixed',
            zIndex: '2',
            top: '0',
            left: '0',
            marginTop: '40px',
        }}>
            <MenuUl>
                <li>
                    <Link to='/'>Feed</Link>
                </li>
                <li>
                    <Link to='/newPost'>New Post</Link>
                </li>
                <li>
                    <a href="">My posts</a>
                </li>
                <li>
                    <a href="">Settings</a>
                </li>
                <li>
                    <a href="" onClick={logout}>Logout</a>
                </li>
            </MenuUl>
        </div>
    );
};

export default SideMenu;