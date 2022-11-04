import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartLists: [],
    },
    reducers: {
        addProduct: (state, action) => {
            const product = state.cartLists.find((product) => product.item._id === action.payload._id);
            if (product) {
                product.quantity = product.quantity + 1;
            } else {
                state.cartLists.push({
                    item: action.payload,
                    quantity: 1,
                });
            }
        },
        increaseQuantity: (state, action ) => {
            state.cartLists[action.payload].quantity++;
        },
        decreaseQuantity: (state, action ) => {
            state.cartLists[action.payload].quantity--;
        },
        deleteProduct: (state, action) => {
            state.cartLists.splice(action.payload, 1)
        },
        deleteAllProduct: (state, action) => {
            state.cartLists= []
        }
    },
});

export const { addProduct, increaseQuantity, decreaseQuantity,deleteProduct,deleteAllProduct} = cartSlice.actions;

export default cartSlice.reducer
