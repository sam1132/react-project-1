import { configureStore } from "@reduxjs/toolkit";
import userReducer from './Features/user/userSlice'
import cartReducer from './Features/cart/cartslice'
const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cartReducer,
    }
})

export default store