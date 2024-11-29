import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
    "fetch/fetchProduct",
    async ()=>
    {
        try {
        const responce = await fetch('https://fakestoreapi.com/products');
        const data = await responce.json();
        console.log("Api function triger");
        console.log(data);
        return data;
        } catch (error) {
            console.log(error);
        }
        
    }
);



export const deleteProductApi = createAsyncThunk(
    "fetch/deleteProductApi",
    async (id)=>
    {
        try {
        const responce = await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        });
        const data = await responce.json();
        // console.log("Api function triger");
        console.log(data);
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
        const responce = await fetch(`https://fakestoreapi.com/products`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(product)

        });
        const data = await responce.json();
        // console.log("Api function triger");
        console.log(data);
        return data;
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
        }

    },

    extraReducers: builder =>{
        builder.addCase(fetchProduct.fulfilled, (state,action)=>
        {
            console.log("extraReducer function call done");
            state.products = action.payload;
        },)

        builder.addCase(deleteProductApi.fulfilled, (state,action)=>
            {
                console.log("extraReducerdelete function call done");
                let id = action.payload.id;
                let fileterProducts = state.products.filter((product)=>
                {
                    return product.id!==id;
                })

                state.products = fileterProducts;
                
            },)

            builder.addCase(addProductApi.fulfilled, (state,action)=>
                {
                    console.log("extraReducerdelete function call done");
                    let newProduct = [action.payload,...state.products]
                    state.products = newProduct;
                    
                },)

    }
})

export const {setProduct,setPost} = ProductSlice.actions;
export default ProductSlice.reducer;