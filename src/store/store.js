import cartSlice from "~/features/cart/cartSlice";
import filterSlice from "~/features/filter/filterSlice";
import productSlice from "~/features/product/productSlice";
import userSlice from "../features/user/userSlice";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
        cart: cartSlice,
        filter: filterSlice,
    }
})
