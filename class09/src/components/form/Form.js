import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storage } from "../../config/firebase";
import {ref,metadata, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  addProductApi,
  updateProductApi
} from "../../store/Slices/ProductSlice";
import { setUpdate } from "../../store/Slices/ProductSlice";


export default function Form(props) {
  const user = useSelector((state)=> state.UserSlice.users)
  const Add = useSelector((state)=> state.productSlice.Add);
  const Update = useSelector((state)=> state.productSlice.Update_);



  const [id,setId] = useState("")
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [uid,setUid] = useState(user.id)
  


  const dispatch = useDispatch();

  useEffect(()=>
    {
      if(props.update)
        {
          // alert("input set")
          setId(props.update.id)
          setTitle(props.update.title);
          setPrice(props.update.price);
          setDescription(props.update.description);
          setCategory(props.update.category);
        }
      
  },[props.update])

  const imageHandler = async (e)=>
  {
    // try {
    //   const file = e.target.files[0];
    //   const fileRef = ref(storage, 'images/'+parseInt(Math.random() * 23345353)+file.name;
    //   const metadata = {
    //     contentType: file.type
    //   };
    //   const response = await uploadBytes(fileRef,metadata,file);
    //   console.log("response",response);
    //   const url = await getDownloadURL(fileRef);
    //   console.log("Url", url);
    // } catch (error) {
    //   console.log("error", error)
    // }
    const file = e.target.files[0];
    setImage('images/'+parseInt(Math.random() * 23345353)+file.name);
   
  }
    

  const AddHandler = async () => {

    

    let obj;


    if(props.update)
    {
      obj = {
        id,
        image,
        title,
        price,
        description,
        category,
      }

    }
    else
    {
      obj = {
        uid,
        image,
        title,
        price,
        description,
        category,
      }
    }
    
      
      if(props.update)
      {
        dispatch(updateProductApi(obj))
        

      }
      else
      {
        dispatch(addProductApi(obj))
        
      }
    
    dispatch(setUpdate(null))
    setTitle("");
    setCategory("");
    setDescription("");
    setPrice("");
     
  };

  return (
    <div className="border border-red-200">
    
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
         <input
          style={{ padding: 5 }}
          type="file"
          placeholder=""
          className="bg-light"
          onChange={(e) => imageHandler(e)}
        ></input>
        <br />
        <button
          style={{ padding: 7 }}
          className="bg-warning"
          onClick={AddHandler}
        >
          {props.update? Update:Add}
        </button>
      </div>
    </div>
  );
}
