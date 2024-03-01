import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async action to handle user login
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch('http://10.0.2.2:7241/api/customer/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Send email and password as JSON string
            });

            if (!response.ok) {
                if (response.status === 400) {
                    throw new Error('Invalid email or password');
                } else {
                    throw new Error('Failed to log in');
                }
            }

            const data = await response.json();
            return data.user;
        } catch (error) {
            console.error('Error during login:', error);
            throw error; // Rethrow the error to be caught by the rejected action handler
        }
    }
);

// Define auth slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            state.user = null; // Reset user state to null upon logout
            // debugger
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null; // Reset error on successful login
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'An error occurred during login';
            });
    },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
