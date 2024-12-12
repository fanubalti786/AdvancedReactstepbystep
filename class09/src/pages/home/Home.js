import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  deleteProductApi, fetchProduct } from "../../store/Slices/ProductSlice";
import { setUpdate } from "../../store/Slices/ProductSlice";
import Form from "../../components/form/Form";
import { logOutAuth } from "../../store/Slices/UserSlice";

export default function Home() {
  const product = useSelector((state) => state.productSlice.products);
  const update = useSelector((state) => state.productSlice.update);




  const dispatch = useDispatch();

  

  // its a comment 
  
  useEffect(()=>
    {
      // alert(Loading)
      dispatch(fetchProduct());
      
    
  
    },[])


    const deleteHandler = (id)=>
    {
      // alert(id)
      dispatch(deleteProductApi(id))
    }

    const updateHandler = ((item)=>
    {
      // alert(item.id)
      dispatch(setUpdate(item))
    })

    const logoutHandler = ()=>
    {
      dispatch(logOutAuth())
    }

  
  

  


  

  return (
    <div>
      <Form update = {update}/>
      <h1>List Of Products</h1>
      <button onClick={logoutHandler}><h1>LogOut</h1></button>

      {product? (
        product?.map((item) => {
          return (
              <div>
                <h1>{item.image}</h1>
                <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <button onClick={()=>deleteHandler(item.id)}>Delete</button>
                <button onClick={()=>updateHandler(item)}>Edit</button>

                <hr/>

              </div>
            
          );
        })
      ) : (
        <h1>Loding.....</h1>
      )}
    </div>
  );
}
