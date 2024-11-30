import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductApi } from '../../store/Slices/ProductSlice';
export default function Form() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc");
  const [category,setCategory] = useState("")

  const dispatch = useDispatch();


  const AddHandler = ()=>
  {
    const obj = {
        title,
        price,
        description,
        image,
        category

    }

    dispatch(addProductApi(obj));

    

  }

  return (
    <div>
      <div>
      {/* {error? <div className="bg-danger p-3 ">{error}</div>: ""} */}
      
      <input
        style={{padding:5}}
        type="text"
        value={title}
        placeholder="Enter your title"
        className="bg-light"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        style={{padding:5}}
        type="text"
        value={price}
        placeholder="Enter your price"
        className="bg-light"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
        style={{padding:5}}
        type="text"
        value={description}
        placeholder="Enter your description"
        className="bg-light"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <input
        style={{padding:5}}
        type="text"
        value={category}
        placeholder="Enter your category"
        className="bg-light"
        onChange={(e) => setCategory(e.target.value)}
      ></input>
      <br />
      <button style={{padding:7}} className="bg-warning" onClick={AddHandler}>
        {/* {props.update? "Update":"Add"} */}
        Add!
      </button>
      
    </div>
    </div>
  )
}