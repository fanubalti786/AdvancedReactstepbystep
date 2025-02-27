import React from 'react'
import {Navigate} from "react-router-dom"
import { useSelector } from 'react-redux'
export default function PrivateRouting({children}) {
  const user = useSelector((state)=> state.UserSlice.users)

  return (
      user? children: <Navigate to={"/Login"}/>
    
  )
}
