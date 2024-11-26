import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    "product/fetchProducts",
    async ()=>{
        try {
            const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log("ExtraReducers Run")
        return data;
        } catch (error) {
            console.log(error)
        }
        
    }
)
export const productSlice = createSlice({

    name: "producSlice",
    initialState: {
        products: ["irfan","mumtaz","sohail"],
        Hello:"irfan"
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

    extraReducers: builder => {
        builder.addCase(fetchProduct.fulfilled, (state,action)=>
        {
            console.log("ExtraReducers Run")
            state.products = action.payload;
        })
    }


});

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;