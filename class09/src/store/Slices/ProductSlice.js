import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export const fetchProduct = createAsyncThunk(
    "fetch/fetchProduct",
    async ()=>
    {
        try {
        alert("click")
        const collectionRef = collection(db,"products");
        const docs = await getDocs(collectionRef);
        let data = []
        docs.forEach((doc)=>
        {
            data.push({
                id: doc.id,
                ...doc.data()
            })

        })
        console.log(data)
        return data;
        } catch (error) {
            console.log(error);
        }
        
    }
);







export const addProductApi = createAsyncThunk(
    "fetch/addProductApi",
    async (product)=>
    {
        try {
        const collectionRef = collection(db,"product");
        const responce = addDoc(collectionRef,product);
        alert(responce);
        return product;
        } catch (error) {
            console.log(error);
        }
        
    });


  
export const ProductSlice = createSlice({
    name:"Products",
    initialState:{
        products:[]
        
    },
    reducers:{

        setProduct:(state,action)=>
        {
            state.products = action.payload;
        },

        setPost:(state,action)=>
        {
            console.log("setPost");
        },

        setUpdate:(state,action)=>
        {
            state.update = action.payload;
        },

       

        

    },

    extraReducers: builder =>{
        builder.addCase(fetchProduct.fulfilled, (state,action)=>
        {
            console.log("extraReducer function call done");
            state.products = action.payload;
        },)

        

            builder.addCase(addProductApi.fulfilled, (state,action)=>
                {
                    console.log("extraReducerdelete function call done");
                    let newProduct = [action.payload,...state.products]
                    state.products = newProduct;
                    
                },)

            


    }
})

export const {} = ProductSlice.actions;
export default ProductSlice.reducer;