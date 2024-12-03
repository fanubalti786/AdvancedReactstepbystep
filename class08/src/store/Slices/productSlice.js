import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
    "fetch/fetchProduct",
    async ()=>
    {
        try {
        const responce = await fetch('https://fakestoreapi.com/products');
        const data = await responce.json();
        console.log("Api function triger");
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
        console.log(data)
        return data;
        } catch (error) {
            alert(error);
        }
        
    }

);



export const addProductApi = createAsyncThunk(
    "fetch/addProductApi",
    async (product)=>
    {
        try {
            alert(product.id)
        const responce = await fetch(`https://fakestoreapi.com/products`, {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(product)

        });
        const data = await responce.json();
        alert(data.id);
        // console.log("Api function triger");
        console.log(data);
        return data;
        } catch (error) {
            console.log(error);
        }
        
    });


    export const updateProductApi = createAsyncThunk(
        "fetch/addProductApi",
        async (product)=>
        {
            try {
                alert("updateProductApi")
            const responce = await fetch(`https://fakestoreapi.com/products${product.id}`, {
                method: "PATCH",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(product)
    
            });
            const data = await responce.json();
            alert(data.id);
            // console.log("Api function triger");
            console.log(data);
            // return data;
            } catch (error) {
                console.log(error);
            }
            
        });

export const ProductSlice = createSlice({
    name:"Products",
    initialState:{
        products:[],
        update:null,
        test:"irfan"
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

        setTest:(state,action)=>
            {
                state.test = action.payload;
            },

        

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

            

                builder.addCase(updateProductApi.fulfilled, (state,action)=>
                    {
                        let newdata = state.products.map((item) => {
                            if (item.id === action.payload.id) {
                              console.log("ifcondition");
                              return action.payload;
                              
                            }
                      
                            return item;
                          });

                          state.products = newdata;
                        
                    },)

    }
})

export const {setProduct,setPost,setUpdate,setTest} = ProductSlice.actions;
export default ProductSlice.reducer;