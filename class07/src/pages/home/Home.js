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
    

     


    </div>
  )
}
