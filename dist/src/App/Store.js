import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../services/auth.slice';
export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
});
