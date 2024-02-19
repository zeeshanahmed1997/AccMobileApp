// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import productsReducer from './Product/productSlice';
import categoriesSlice from './Product/categoriesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    categories: categoriesSlice,
    // Add other reducers as needed
  },
});

export default store;
