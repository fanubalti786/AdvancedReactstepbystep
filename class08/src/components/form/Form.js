import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductApi,
  updateProductApi,
} from "../../store/Slices/ProductSlice";
import { Link } from "react-router-dom";

export default function Form() {
  const update = useSelector((state) => state.productSlice.update);
  const [id,setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (update) {
      setId(update.id);
      setTitle(update.title);
      setPrice(update.price);
      setDescription(update.description);
      setCategory(update.category);
    }
  }, [update]);

  const AddHandler = () => {
    let obj;
    if (update) {
      obj = {
        id,
        title,
        price,
        description,
        image,
        category
      };
    } else {
      obj = {
        title,
        price,
        description,
        image,
        category,
      };
    }

    alert(image);

    {
      update ? dispatch(updateProductApi(obj)) : dispatch(addProductApi(obj));
    }
    setTitle("");
    setPrice("");
    setDescription("");
    setCategory("");
  };

  return (
    <div>
      <Link to={"/"}><button>Home</button></Link>
      <Link to={"/New"}><h1>New</h1></Link>
      <div>
        {/* {error? <div className="bg-danger p-3 ">{error}</div>: ""} */}

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
        <Link to={"/"}><button
          style={{ padding: 7 }}
          className="bg-warning"
          onClick={AddHandler}
        >
          {update ? "Update" : "Add"}
        </button></Link>
      </div>
    </div>
  );
}
