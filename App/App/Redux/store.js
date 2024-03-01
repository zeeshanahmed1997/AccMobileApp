import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlice';
import productReducer from './Slices/productSlice'
import cartReducer from './Slices/cartSlice'
export default configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
    },
});
