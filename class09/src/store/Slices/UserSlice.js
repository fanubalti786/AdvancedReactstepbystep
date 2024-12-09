import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { auth } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';

export const signInAuth = createAsyncThunk(
    "signInAuth",
     (user)=>{
        alert("signInAuth");
        return 5;
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
            console.log(actio.payload)
            state.users = actio.payload
        })
    }
    
    
})

export const {} = UserSlice.actions;
export default UserSlice.reducer;