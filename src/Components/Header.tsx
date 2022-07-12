import React from 'react';
import { PageTitle } from '../;Styles/Titles.styles';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
    return (
        <div style={{
            width: '90%',
            height: '5%',
            position: 'fixed',
            top: '0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'black',
        }}>
            <GiHamburgerMenu style={{color: 'white'}}/>
            <h1 style={{color: 'white',fontSize: '24px'}}>Feed</h1>
            <img 
                src="https://i.pinimg.com/originals/03/3f/c5/033fc537c42bfe4e2eb5b6e128a2d083.png" 
                alt="" 
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }}
            />
        </div>
    );
};

export default Header;