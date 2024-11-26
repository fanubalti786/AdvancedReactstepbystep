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
        product: []
    },

    reducers:{
        setProduct: (state,action)=>
        {
            state.product = action.payload;
        },

        setPost: (state,action)=>
        {
            state.post = action.payload;
        }
    },

    extraReducers:{

    }

    

});

export const {setProduct} = productSlice.actions;
export default {productSlice} = productSlice.reducer;