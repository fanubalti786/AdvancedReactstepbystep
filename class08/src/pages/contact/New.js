import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function New() {
  const test = useSelector((state) => state.productSlice.test);
  const product = useSelector((state) => state.productSlice.products);

  useEffect(() => 
  {
    alert("hello")
  })

  

  return (
    <div>
      <h1>New</h1>
      <h2>{test}</h2>
      <div>DAta</div>


      {
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
                <h1>{item.id}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <div style={{display:'flex'}}>
                <button>Delete</button>
                <button>Edit</button>
                </div>
                <hr/>

              </div>
            </div>
          );
        })
      }

    </div>
  )
}