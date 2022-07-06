import React from 'react';
import { GlobalStyles } from '../Styles/Global.Styles';
import Login from '../pages/Login.page';
import Register from '../pages/Register.page';
import Feed from '../pages/Feed.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, null),
        React.createElement(BrowserRouter, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Feed, null) }),
                React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
                React.createElement(Route, { path: "/register", element: React.createElement(Register, null) })))));
};
export default App;
