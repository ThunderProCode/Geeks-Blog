import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state,action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        register: (state,action) => {
            state.user = action.payload
        }
    },
});

export const {login,logout,register} = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
