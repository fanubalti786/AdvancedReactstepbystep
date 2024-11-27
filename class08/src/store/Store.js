import {configureStore} from '@reduxjs/toolkit';
import productSlice from './Slices/ProductSlice'
export const store = configureStore({
    reducer:{
        productSlice: productSlice
    }
});