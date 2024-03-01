// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const id = action.payload.productId;
            const existingItem = state.cartItems.find(item => item.productId === id);
            // debugger
            if (existingItem) {
                // debugger
                existingItem.quantity++;
            } else {
                // debugger
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
