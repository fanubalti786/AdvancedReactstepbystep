import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { db } from '../../config/firebase';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, onSnapshot, orderBy, query, updateDoc, where } from 'firebase/firestore';
import { setLoading } from './UserSlice';


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
    async (product,store) => {
        try {
            store.dispatch(setUpdate_("Loading..."));
            store.dispatch(setAdd("Loading..."));

            console.log(product);  
            const collectionRef = collection(db, "products");
            // Add the product to the database and get the document reference
            const responce = await addDoc(collectionRef, product);

            // Access the generated ID
            const generatedId = responce.id;
            console.log("Generated ID:", generatedId);

            // Optionally, return the product with the generated ID if needed
            return { ...product, id: generatedId };
        } catch (error) {
            console.log("Error adding product:", error);
            throw error; // Throw the error for proper error handling
        }
    }
);



    export const deleteProductApi = createAsyncThunk(
        "fetch/deleteProductApi",
        async (id)=>
        {
            try {
            alert("delete")
            const dogRef = doc(db,"products",id);
            const responce = await deleteDoc(dogRef);
            return id;
            } catch (error) {
                console.log(error);
            }
            
        });
    


    export const updateProductApi = createAsyncThunk(
        "fetch/updateProductApi",
        async (product)=>
        {
            let copy = {...product};
            try {
            const docRef = doc(db,"products",product.id);
            delete product.id;
            const responce = await updateDoc(docRef,product);
            return copy;
            } catch (error) {
                console.log(error);
            }
            
        });


  
export const ProductSlice = createSlice({
    name:"Products",
    initialState:{
        products:null,
        update:null,
        Add:"Add!",
        Update_:"Update!"
        
    },
    reducers:{

        setProduct:(state,action)=>
        {
            state.products = action.payload;
        },

        setUpdate:(state,action)=>
            {
                state.update = action.payload;
            },


        setUpdate_:(state,action)=>
        {
            state.Update_ = action.payload;
        },

        setAdd:(state,action)=>
            {
                state.Add = action.payload;
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
                state.Add = "Add!";
                state.Update_ = "Update";
                
            },)

        
            builder.addCase(deleteProductApi.fulfilled, (state,action)=>
                {
                    console.log("extraReducerdelete function call done");
                    let newProduct = state.products.filter((item)=>
                    {
                        return item.id !== action.payload
                    })
                    alert(newProduct.id)
                    state.products = newProduct;
                    
                },)

                builder.addCase(updateProductApi.fulfilled, (state,action)=>
                    {
                        alert(action.payload.id)
                        let newdata = state.products.map((item) => {
                            if (item.id === action.payload.id) {
                              return action.payload;
                              
                            }
                      
                            return item;
                          });

                          state.products = newdata;
                        
                    },)
        
        


    }
})

export const {setUpdate,setAdd,setUpdate_} = ProductSlice.actions;
export default ProductSlice.reducer;