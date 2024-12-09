import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { auth } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';

export const signInAuth = createAsyncThunk(
    "signInAuth",
     ()=>{
        alert("signInAuth");
    }

)


export const loginAuth = createAsyncThunk(
    "signInAuth",
     (user)=>{
        alert("LoginInAuth");
    }

)

export const UserSlice = createSlice({

    name:"Products",
    initialState:{
        users:null
        
    },
    reducers:{

        setProduct:(state,action)=>
        {
            state.products = action.payload;
        },



    },

    extraReducers: (builder)=>
    {
        builder.addCase(signInAuth.fulfilled,(state,actio)=>
        {
            console.log("signInBuilder")
            state.users = actio.payload
        },)

        builder.addCase(loginAuth.fulfilled,(state,actio)=>
            {
                console.log("loginBuilder")
            },)
    }
    
    
})

export const {} = UserSlice.actions;
export default UserSlice.reducer;