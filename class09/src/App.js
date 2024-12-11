import React from 'react'
import Home from './pages/home/Home'
import Routing from './routing/Routing'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './store/Slices/UserSlice';

export default function App() {

  const dispatch = useDispatch();

  useEffect(()=>
  {
    dispatch(getCurrentUser())
  })
  // kfjfj
  
  return (
    <div>

      <Routing/>
      
    </div>
  )
}
