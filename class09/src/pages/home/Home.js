import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  fetchProduct } from "../../store/Slices/ProductSlice";
import Form from "../../components/form/Form";

export default function Home() {
  const product = useSelector((state) => state.productSlice.products);


  const dispatch = useDispatch();

  



  const getProduct = () =>
  {
    dispatch(fetchProduct());
  }
  

  


  

  return (
    <div>
      <Form/>
      <h1>List Of Products</h1>
      <button onClick={getProduct}>Get!</button>

      {product? (
        product?.map((item) => {
          return (
              <div>
                <h1>{item.image}</h1>
                <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <div style={{display:'flex'}}>
                </div>
                <hr/>

              </div>
            
          );
        })
      ) : (
        <h1>Not Available Data</h1>
      )}
    </div>
  );
}
