import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';

export const signInAuth = createAsyncThunk(
    "signInAuth",
    (user)=>
    {
        try {
            alert("signInAuth");
        return user;
        } catch (error) {
            console.log(error);
        }
        
    }
);

export const logInAuth = createAsyncThunk(
    "logInAuth",
    (user)=>
    {
        try {
            alert("logInAuth");
        return user;
        } catch (error) {
            console.log(error);
        }
        
    }
);


  
export const UserSlice = createSlice({
    name:"UsersAuthentication",
    initialState:{
        users:[]
        
    },
    reducers:{

        setProduct:(state,action)=>
        {
            state.products = action.payload;
        },


    },

    extraReducers: builder =>{
        builder.addCase(signInAuth.fulfilled, (state,action)=>
        {
            console.log("extraReducer function call done");
            state.users = [...state.users, action.payload];
        },)

    
    }
})

export const {} = UserSlice.actions;
export default UserSlice.reducer;