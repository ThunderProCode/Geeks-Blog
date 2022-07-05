import React from 'react';
import { GlobalStyles } from '../Styles/Global.Styles';
import Login from '../pages/Login.page';
import Register from '../pages/Register.page';

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Register/>
        </>
    );
};

export default App;