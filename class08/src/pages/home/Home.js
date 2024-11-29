import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../store/Slices/ProductSlice";

export default function Home() {
  const product = useSelector((state) => state.productSlice.products);
  console.log(product);

  const dispatch = useDispatch();

  const GetData = () => {
    dispatch(fetchProduct());
  };

  return (
    <div>
      <button onClick={GetData}>GetData!</button>

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
                <button>Delete</button>
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
