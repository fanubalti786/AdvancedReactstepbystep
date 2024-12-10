import React from 'react'
import {Navigate} from "react-router-dom"
import { useSelector } from 'react-redux'
export default function PublicRouting({children}) {
  const user = useSelector((state)=> state.UserSlice.users)
  return (
    
      user ? <Navigate to={"/"}/>: children
      
  )
}
