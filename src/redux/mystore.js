import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import Checkout from "../Components/Checkout";
import checkoutSlice from "./checkoutSlice";
import productSlice from "./productSlice";
import categorySlice from "./categorySlice";
import userSlice from "./userSlice";
import orderSlice from "./orderSlice";


const mystore = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        product:productSlice.reducer,
        user:userSlice.reducer,
        category:categorySlice.reducer,
        checkout:checkoutSlice.reducer,
        order:orderSlice.reducer
    }
})
export default mystore