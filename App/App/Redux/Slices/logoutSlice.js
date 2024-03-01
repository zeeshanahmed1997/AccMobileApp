// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null, // Initial user state is null
    // other initial state properties...
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null; // Reset user state to null upon logout
        },
        // other reducers...
    },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
