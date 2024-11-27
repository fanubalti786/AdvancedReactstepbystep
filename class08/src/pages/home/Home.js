import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchProduct } from '../../store/Slices/productSlice'
import { data } from '../../constant/Constant'

const info = data;

export default function Home() {
    const product = useSelector((store)=>store.product.products)
    console.log(product)
    const dispatch = useDispatch()
    

    const GetData = ()=>
    {
      dispatch(fetchProduct());
    };


  return (
    <div>
    

      <button onClick={GetData} >GetData!</button>

      {product?.map((item)=>
      {
        return(
          <div>
          <h1>{item.id}</h1>
          <h1>{item.title}</h1>
          <h1>{item.price}</h1>
          <h1>{item.description}</h1>


          </div>

        )
      })
      }
    

     


    </div>
  )
}
