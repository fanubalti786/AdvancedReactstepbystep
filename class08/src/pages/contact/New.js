import React from 'react'
import { useDispatch, useSelector } from "react-redux";

export default function New() {
    const test = useSelector((state) => state.productSlice.test);
  

  return (
    <div>
      <h1>Contact Us</h1>
      <h2>{test}</h2>
    </div>
  )
}