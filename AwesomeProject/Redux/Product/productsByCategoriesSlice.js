// Inside your productsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the thunk
export const fetchProductsByCategory = createAsyncThunk(
    'products/fetchByCategory',
    async (category, { getState, requestId, rejectWithValue }) => {
        try {
            const response = await fetch(`YOUR_API_ENDPOINT/products?category=${category}`);
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Add extraReducers to handle the lifecycle
const productsByCategoriesSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // Your other reducers here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsByCategory.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Add products to the state array
                state.products = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default productsByCategoriesSlice.reducer;
