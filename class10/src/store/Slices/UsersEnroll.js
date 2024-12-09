import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { auth } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';

export const userSignIn = createAsyncThunk(
    "user/SignIn",
    async (user)=>
    {

        console.log(user)
        // try {
        // const collectionRef = collection(db,"products");
        // const docs = await getDocs(collectionRef);
        // let data = []
        // docs.forEach((doc)=>
        // {
        //     data.push({
        //         id: doc.id,
        //         ...doc.data()
        //     })

        // })

        // return data;
        // } catch (error) {
        //     console.log(error);
        // }
        
    }
);




  


  
export const UsersEnroll = createSlice({
    name:"Products",
    initialState:{
        users:null
        
    },

    reducers:{


    },

    extraReducers: builder =>{
        builder.addCase(fetchProduct.fulfilled, (state,action)=>
        {
            console.log("extraReducer function call done");
            state.products = action.payload;
        },)


    }
})

export const {} = UsersEnroll.actions;
export default UsersEnroll.reducer;