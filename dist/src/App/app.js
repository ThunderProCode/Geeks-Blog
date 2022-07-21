import React from 'react';
// Styles
import { GlobalStyles } from '../Styles/Global.Styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Pages
import Login from '../pages/Login.page';
import Register from '../pages/Register.page';
import Feed from '../pages/Feed.page';
import PostForm from '../pages/PostForm.page';
import PasswordReset from '../pages/PasswordReset.page';
// Router 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyPosts from '../pages/MyPosts.page';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(GlobalStyles, null),
        React.createElement(BrowserRouter, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Feed, null) }),
                React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
                React.createElement(Route, { path: "/register", element: React.createElement(Register, null) }),
                React.createElement(Route, { path: '/newPost', element: React.createElement(PostForm, null) }),
                React.createElement(Route, { path: '/myPosts', element: React.createElement(MyPosts, null) }),
                React.createElement(Route, { path: '/passwordReset', element: React.createElement(PasswordReset, null) }))),
        React.createElement(ToastContainer, { autoClose: 2000, theme: "dark", position: 'top-center' })));
};
export default App;
