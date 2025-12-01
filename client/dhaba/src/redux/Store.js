import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js'

const Store = configureStore({
    reducer : {
        auth : authReducer
    }
})

console.log(store)
export default Store