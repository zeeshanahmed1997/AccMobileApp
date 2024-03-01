import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    productImagesData: [],
    productImages: [],
    loading: false,
    error: null,
};

export const fetchProductImagesData = createAsyncThunk(
    'products/fetchProductImagesData',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://10.0.2.2:7241/api/productImageData');
            const productImagesData = response.data;

            const productIds = new Set(); // HashSet to store unique product IDs

            // Initialize an empty array to store all images
            const productImages = [];

            for (const product of productImagesData) {
                const productId = product.productId;

                // Check if the product ID is already added
                if (!productIds.has(productId)) {
                    const productImagesResponse = await axios.get(`http://10.0.2.2:7241/api/productImageData/${productId}`);
                    const images = productImagesResponse.data;

                    // Push each image to the productImages array
                    productImages.push({ productId, images });

                    // Add the product ID to the set
                    productIds.add(productId);
                }
            }

            // Return the array containing all images
            return productImages;
        } catch (error) {
            throw Error(error.response.data.error);
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductImagesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductImagesData.fulfilled, (state, action) => {
                state.loading = false;
                state.productImages = action.payload; // Update productImages with fetched data
            })
            .addCase(fetchProductImagesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectProductImagesData = (state) => state.products.productImagesData;
export const selectProductImages = (state) => state.products.productImages;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;

export default productSlice.reducer;
