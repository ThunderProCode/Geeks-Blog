import React, { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { MenuIcon } from '../Styles/Icons.styles';
import { TopHeader } from '../Styles/Divs.styles';
import { Link } from 'react-router-dom';
import { LargeMenuUl } from '../Styles/Menu.styles';


interface headerProps {
    pageTitle: string
}

const Header = (props:headerProps) => {

    const [ displayMenu, setDisplayMenu ] = useState(false);
    const user = useSelector(selectUser);
    const [profilePicture,setProfilePicture] = useState("");

    const toggleMenu = () => {
        setDisplayMenu(!displayMenu);
    }

    useEffect(() => {
        if(user){
            setProfilePicture(user.profilePic);
        }
    },[user])


    return (
        <>
            { 
                displayMenu ? <SideMenu/> : <></> 
            }
            <TopHeader>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:'space-between'
                }}>
                    <h1 style={{color: 'white',fontSize: '24px',justifySelf: 'center'}}>{ props.pageTitle }</h1>
                    <LargeMenuUl>
                        <li>
                            <Link to='/'>Feed</Link>
                        </li>
                        <li>
                            <Link to='/newPost'>New Post</Link>
                        </li>
                        <li>
                            <Link to='/myPosts'>My Posts</Link>
                        </li>
                        <li>
                            <a href="">Logout</a>
                        </li>
                    </LargeMenuUl>
                    <MenuIcon onClick={toggleMenu}/>
                    <img 
                        src={profilePicture} 
                        alt="" 
                        style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </TopHeader>
        </>
    );
};

export default Header;