import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        loading: false,
        progress: 0,
    },
    reducers: {
        updateLoading: (state,action) => {
            state.loading = action.payload;
        },
        updateProgress: (state,action) => {
            state.progress = action.payload;
        }
    }
})

export const { updateLoading, updateProgress } = postsSlice.actions;
export const selectLoading = (state) => state.posts.loading;
export const selectProgress = (state) => state.posts.progress;
export default postsSlice.reducer;