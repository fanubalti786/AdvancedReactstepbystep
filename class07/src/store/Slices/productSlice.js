import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const fetchProduct = createAsyncThunk(
    "product/fetchProducts",
    async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }
)
export const productSlice = createSlice({

    name: "producSlice",
    initialState: {
        products: []
    },

    reducers:{
        setProduct: (state,action)=>
        {
            state.products = action.payload;
        },

        setPost: (state,action)=>
        {
            state.post = action.payload;
        }
    },

    extraReducers:{
        [fetchProduct.fulfilled]: (state,action)=>
        {
            state.products = action.payload;
        }
    }

    

});

export const {setProduct} = productSlice.actions;
export default {productSlice} = productSlice.reducer;