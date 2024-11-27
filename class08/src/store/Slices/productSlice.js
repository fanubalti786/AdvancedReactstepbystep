import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
    "fetchProduct",
    async ()=>
    {
        try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await responce.json();
        console.log("Api function triger");
        console.log(data);
        return data;
        } catch (error) {
            console.log(error);
        }
        
    }
);

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
        }

    },

    extraReducers: builder =>{
        builder.addCase(fetchProduct.fulfilled, (state,action)=>
        {
            console.log("extraReducer function call done");
            state.products = action.payload;
        })
    }
})

export const {setProduct,setPost} = ProductSlice.actions;
export default ProductSlice.reducer;