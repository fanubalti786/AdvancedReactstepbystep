import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';

export const fetchProduct = createAsyncThunk(
    "fetch/fetchProduct",
    async ()=>
    {
        try {
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


        // const collectionRef = collection(db,"products");
        // // const queryRef = query(collectionRef,where("title","==","irfan"))
        // const queryRef = query(collectionRef,where("title","!=","irfan"),orderBy("title"),limit(3))

        // const docs = await getDocs(queryRef);
        // let data = []
        // docs.forEach((doc)=>
        // {
        //     data.push({
        //         id: doc.id,
        //         ...doc.data()
        //     })

        // })


        // const collectionRef = collection(db,"products");
        // let data = []
        // onSnapshot(collectionRef,(docs)=>
        // {
        //     console.log(docs)
        //     docs.forEach((doc)=>
        //     {
        //         data = [...data,{doc:doc.id,...doc.data()}]
        //     });
        // });
        // console.log(data)
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
        console.log(product)
        const collectionRef = collection(db,"products");
        const responce = await addDoc(collectionRef,product);
        alert(responce);
        return product;
        } catch (error) {
            console.log(error);
        }
        
    });



    export const deleteProductApi = createAsyncThunk(
        "fetch/deleteProductApi",
        async (id)=>
        {
            try {
            console.log(id)
            const dogRef = doc(db,"products",id);
            const responce = await deleteDoc(dogRef);
            return id;
            } catch (error) {
                console.log(error);
            }
            
        });
    


    export const updateProductApi = createAsyncThunk(
        "fetch/updateProductApi",
        async (product,key)=>
        {
            alert(key)
            try {
            const docRef = doc(db,"products",key);
            const responce = await updateDoc(product);
            alert(responce);
            return key;
            } catch (error) {
                console.log(error);
            }
            
        });


  
export const ProductSlice = createSlice({
    name:"Products",
    initialState:{
        products:null,
        update:null
        
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
                alert("add")
                console.log("extraReducerdelete function call done");
                let newProduct = [action.payload,...state.products]
                state.products = newProduct;
                
            },)

        
            builder.addCase(deleteProductApi.fulfilled, (state,action)=>
                {
                    console.log("extraReducerdelete function call done");
                    let newProduct = state.products.filter((item)=>
                    {
                        return state.products.id !== action.payload.id
                    })
                    state.products = newProduct;
                    
                },)

                builder.addCase(updateProductApi.fulfilled, (state,action)=>
                    {
                        alert("update")
                        let newdata = state.products.map((item) => {
                            if (item.id === action.payload) {
                              return action.payload;
                              
                            }
                      
                            return item;
                          });

                          state.products = newdata;
                        
                    },)
        
        


    }
})

export const {setUpdate} = ProductSlice.actions;
export default ProductSlice.reducer;