import React from 'react'
import { useState } from 'react';
export default function Form() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc");
  const [category,setCategory] = useState("")



  const AddHandler = ()=>
  {
    const obj = {
        title,
        price,
        description,
        image,
        category

    }

    
  }

  return (
    <div>
      <div>
      {/* {error? <div className="bg-danger p-3 ">{error}</div>: ""} */}
      
      <input
        type="text"
        value={title}
        placeholder="Enter your title"
        className="bg-light"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        value={price}
        placeholder="Enter your price"
        className="bg-light"
        onChange={(e) => setPrice(e.target.value)}
      ></input>
      <input
        type="text"
        value={description}
        placeholder="Enter your description"
        className="bg-light"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      {/* <input
        type="text"
        value={image}
        placeholder="Enter your rollno"
        className="bg-light"
        onChange={(e) => setImage(e.target.value)}
      ></input> */}
      <br />
      <button className="bg-warning" onClick={AddHandler}>
        {/* {props.update? "Update":"Add"} */}
        Add!
      </button>
      
    </div>
    </div>
  )
}
