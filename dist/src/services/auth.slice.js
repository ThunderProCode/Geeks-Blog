import { createSlice } from "@reduxjs/toolkit";
const userJson = localStorage.getItem('user');
const user = userJson !== null ? JSON.parse(userJson) : null;
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: user ? user : null,
        rememberUser: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            if (state.rememberUser) {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
        register: (state, action) => {
            state.user = action.payload;
            if (state.rememberUser) {
                localStorage.setItem('user', JSON.stringify(action.payload));
            }
        },
        updateRememberUser: (state, action) => {
            state.rememberUser = action.payload;
        }
    },
});
export const { login, logout, register, updateRememberUser } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
