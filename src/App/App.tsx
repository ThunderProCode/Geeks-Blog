import React from 'react';
import { GlobalStyles } from '../Styles/Global.Styles';
import Login from '../pages/Login.page';
import Register from '../pages/Register.page';
import Feed from '../pages/Feed.page';
import PostForm from '../pages/PostForm.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Feed/>}/>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path='/newPost' element={<PostForm/>} />
                </Routes>
            </BrowserRouter>
            <ToastContainer/>
        </>
    );
};

export default App;