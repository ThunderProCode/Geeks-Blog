import React from 'react';
import { MenuUl } from '../Styles/Menu.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../services/auth.slice'
import {  logoutOfApp } from '../services/auth.service';

const SideMenu = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        logoutOfApp();
    }

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
                    <a href="" onClick={handleLogout}>Logout</a>
                </li>
            </MenuUl>
        </div>
    );
};

export default SideMenu;