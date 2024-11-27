import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    "product/fetchProducts",
    async ()=>{
        try {
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
        // fetch('https://fakestoreapi.com/products')
        const data = await responce.json();
        return data;
        } catch (error) {
        console.log("ExtraReducers Run")
            
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