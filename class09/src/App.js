import React from 'react'
import Routing from './routing/Routing'
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getCurrentUser } from './store/Slices/UserSlice';

export default function App() {
  // const [Loading,setLoading] = useState(false)
  const Loading = useSelector((state)=>state.UserSlice.Loading)

  const dispatch = useDispatch();

  useEffect(()=>
  {
    dispatch(getCurrentUser())
  },[])
  // kfjfj
  
  return (
    <div>
      {Loading? <h1>Loading.....</h1>:<Routing/>}
      
      
    </div>
  )
}
