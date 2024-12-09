import {configureStore} from '@reduxjs/toolkit';
import UsersEnroll from './Slices/UsersEnroll';
export const store = configureStore({
    reducer:{
        UsersEnroll: UsersEnroll
    }
});