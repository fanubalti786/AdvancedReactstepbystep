import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { fetchProduct } from '../../store/Slices/ProductSlice';



export default function Home() {

  // const product = useSelector(state=>state.productSlice.products);
  // console.log(product);

  // const dispatch = useDispatch();
    
    const GetData = ()=>
    {

      // dispatch(fetchProduct());
      console.log("hello")

    }

   


  return (
    <div>
    

      <button onClick={GetData} >GetData!</button>

      {/* {product.length > 0?  product?.map((item)=>
      {
        return(
          <div>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
          <h1>{item.description}</h1>


          </div>

        )
      }):
      <h1>Not Available Data</h1>
      } */}
    

     


    </div>
  )
}
