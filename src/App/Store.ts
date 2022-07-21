import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/auth.slice';
import postsReducer from '../services/posts.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postsReducer
    }
});

 export type AppDispatch = typeof store.dispatch
