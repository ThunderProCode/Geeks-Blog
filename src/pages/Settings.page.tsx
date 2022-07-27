import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { PageWrapper } from '../Styles/Divs.styles';
import { PageTitle } from '../Styles/Titles.styles';
import { useSelector } from 'react-redux';
import { selectUser } from '../services/auth.slice';
import { useNavigate } from 'react-router-dom';

const Settings = () => {

    const user = useSelector(selectUser);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate('/login');
        }
    })

    return (
        <PageWrapper>
            <Header pageTitle='Settings'></Header>
            <PageTitle>Settings</PageTitle>
        </PageWrapper>
    );
};

export default Settings;