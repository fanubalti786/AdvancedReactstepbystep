import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductApi,
  updateProductApi,
} from "../../store/Slices/ProductSlice";

export default function Form() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();


    

  const AddHandler = () => {
    let obj;
    
      obj = {
        title,
        price,
        description,
        image,
        category,
      };
  
    dispatch(addProductApi(obj));
    
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
  };

  return (
    <div>
    
      <div>

        <input
          style={{ padding: 5 }}
          type="text"
          value={title}
          placeholder="Enter your title"
          className="bg-light"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          style={{ padding: 5 }}
          type="text"
          value={price}
          placeholder="Enter your price"
          className="bg-light"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <input
          style={{ padding: 5 }}
          type="text"
          value={description}
          placeholder="Enter your description"
          className="bg-light"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          style={{ padding: 5 }}
          type="text"
          value={category}
          placeholder="Enter your category"
          className="bg-light"
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <br />
        <button
          style={{ padding: 7 }}
          className="bg-warning"
          onClick={AddHandler}
        >
          Add!
        </button>
      </div>
    </div>
  );
}
