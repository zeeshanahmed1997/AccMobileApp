import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your actual login API endpoint here
const LOGIN_API_URL = 'http://localhost:7241/api/customer/login';

// Async Thunk Action for logging in a user
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      // Before making the API call
      // debugger
      const response = await axios.post(LOGIN_API_URL, credentials);
      // debugger
      // After receiving the response, before checking if it was successful
      const data = response.data;

      // debugger
      if (response.status === 200 && data.token != null) {
        // Dispatch the success action if login is successful
        // Inspect the data if login is successful
        // debugger
        return { token: data.token, user: data.customer }; // Adjusted to match the server's response structure
      } else {
        // Dispatch the rejected action if login is not successful
        // Inspect the data if login is not successful
        // debugger
        return rejectWithValue(data.message || 'Login failed');
      }
    } catch (error) {
      // debugger
      // Catch any errors during the Axios call
      return rejectWithValue(error.response?.data?.message || 'Network error');
    }
  }
);

// Slice to handle user authentication state
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Add synchronous actions here if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    // You can handle more actions here if necessary
  },
});

export const { /* add any synchronous actions here */ } = authSlice.actions;
export default authSlice.reducer;

