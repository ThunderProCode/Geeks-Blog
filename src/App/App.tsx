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
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route path="https://geeksblogs-45cf2.web.app/" element={<Feed/>}/>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path='/newPost' element={<PostForm/>} />
                    <Route path='/myPosts' element={ <MyPosts/> } />
                    <Route path='/passwordReset' element={ <PasswordReset/> }/>
                </Routes>
            </BrowserRouter>
            <ToastContainer 
                autoClose={2000}
                theme="dark"  
                position='top-center'
            />
        </>
    );
};

export default App;