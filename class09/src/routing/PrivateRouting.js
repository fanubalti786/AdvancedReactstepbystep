import React from 'react'
import {Navigate} from "react-router-dom"
export default function PrivateRouting({children}) {
  return (
      true? children: <Navigate to={"/Login"}/>
    
  )
}
