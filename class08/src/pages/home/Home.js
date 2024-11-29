import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductApi, fetchProduct } from "../../store/Slices/ProductSlice";

export default function Home() {
  const product = useSelector((state) => state.productSlice.products);
  console.log(product);

  const dispatch = useDispatch();

  useEffect(()=>
  {
    dispatch(fetchProduct());

  },[])

  

  const deleteProdect = (id)=>
  {

    dispatch(deleteProductApi(id));

  }

  return (
    <div>
      <h1>List Of Products</h1>
      {product.length > 0 ? (
        product?.map((item) => {
          return (
            <div style={{display:'flex'}}>
              <div style={{padding:10}}>
                <img
                  style={{ width: 100 }}
                  src={item.image}
                  alt={product.title}
                />
              </div>

              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <div style={{display:'flex'}}>
                <button onClick={()=>deleteProdect(item.id)}>Delete</button>
                <button>Edit</button>
                </div>
                <hr/>

              </div>
            </div>
          );
        })
      ) : (
        <h1>Not Available Data</h1>
      )}
    </div>
  );
}
