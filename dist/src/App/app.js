import React from 'react';
import { GlobalStyles } from '../Styles/Global.Styles';
import Login from '../pages/Login.page';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, null),
        React.createElement(Login, null)));
};
export default App;
