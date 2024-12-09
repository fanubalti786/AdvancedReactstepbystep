import {configureStore} from '@reduxjs/toolkit';
import productSlice from './Slices/ProductSlice'
import { UserSlice } from './Slices/UserSlice';


export const store = configureStore({
    reducer:{
        productSlice: productSlice,
        UserSlice: UserSlice

    }
});