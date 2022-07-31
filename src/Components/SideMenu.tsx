import React from 'react';
import { MenuUl } from '../Styles/Menu.styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../services/auth.slice'
import {  logoutOfApp } from '../services/auth.service';
import { MenuWrapper } from '../Styles/Divs.styles';

const SideMenu = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        logoutOfApp();
    }

    return (
        <>
            <MenuWrapper>
                <MenuUl>
                    <li>
                        <Link to='https://geeksblogs-45cf2.web.app/'>Feed</Link>
                    </li>
                    <li>
                        <Link to='/newPost'>New Post</Link>
                    </li>
                    <li>
                        <Link to='/myPosts'>My posts</Link>
                    </li>
                    <li>
                        <a href="" onClick={handleLogout}>Logout</a>
                    </li>
                </MenuUl>
            </MenuWrapper>
        </>
    );
};

export default SideMenu;