import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Form from "../../components/form/Form";
import { Link } from 'react-router-dom';
import { setTest } from '../../store/Slices/ProductSlice';

export default function About() {



const dispatch = useDispatch()
  useEffect(()=>
{
    dispatch(setTest("mumtaz"))
},[])
    
  return (
    <div>
      <Form/>
    </div>
  )
}
