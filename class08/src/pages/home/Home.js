import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductApi, fetchProduct, setUpdate } from "../../store/Slices/ProductSlice";
import { Link } from "react-router-dom";

export default function Home() {
  const product = useSelector((state) => state.productSlice.products);
  const test = useSelector((state) => state.productSlice.test);

  console.log(product);

  const dispatch = useDispatch();
  useEffect(()=>
  {
    if(true)
    {
      alert("Triger")
    dispatch(fetchProduct());
    }
    
    

    return(
      ()=>
      {
        alert("Unmount")
      }
    )

  },[])

  
  

  const deleteProduct = (id)=>
  {
    alert(id)
    dispatch(deleteProductApi(id));

  }


  const editProduct = (product)=>
    {
      alert(product.id)
      dispatch(setUpdate(product));
  
    }

  return (
    <div>
      <Link to={"/New"}><h1>New!</h1></Link>
      <Link to={"/About"}><button style={{fontSize:16}}>Add Product</button></Link>
      <h1>List Of Products</h1>
      <h1>{test}</h1>
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
                <h1>{item.image}</h1>
                <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <div style={{display:'flex'}}>
                <button onClick={()=>deleteProduct(item.id)}>Delete</button>
                <Link to={"/About"}><button onClick={()=>editProduct(item)}>Edit</button></Link>
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
