import React from 'react'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from '../../store/Slices/productSlice'


export default function Home() {
    const product = useSelector((store)=>store.product.products)
    console.log(product)
    const dispatch = useDispatch()


    // agr me [] iska use na keron tu bar bar re render hoga 
    useEffect(()=>
    {
      console.log("hello")
      dispatch(fetchProduct());

    },[])
    

    // const GetData = ()=>
    // {
    //   dispatch(fetchProduct());
    // };


  return (
    <div>
    

      {/* <button onClick={GetData} >GetData!</button> */}
      <button>GetData!</button>


      {product?.map((item)=>
      {
        return(
          <div>
          <h1>{item.userId}</h1>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <h1>{item.body}</h1>
          </div>
        )
      })
      }
    

     


    </div>
  )
}
