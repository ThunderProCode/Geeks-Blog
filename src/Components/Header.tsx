import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideMenu from './SideMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';


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
            <header style={{
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
            }}>
                <GiHamburgerMenu style={{color: 'white', fontSize: '20px'}} onClick={toggleMenu} />
                <h1 style={{color: 'white',fontSize: '24px'}}>{ props.pageTitle }</h1>
                <img 
                    src={profilePicture} 
                    alt="" 
                    style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                    }}
                />
            </header>
        </>
    );
};

export default Header;