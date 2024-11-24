import React from "react";
import { useState,useEffect } from "react";
import * as yup from "yup";

export default function Form(props) {

  


  

  useEffect(()=>
    {

      if(props.update)
      {
        setId(props.update.id)
        setName(props.update.name)
        setEmail(props.update.email)
        setRolno(props.update.rolno)
        setCourse(props.update.class)
        // setCounter(counter + 1)
      }
    
    },[props.update])

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRolno] = useState("");
  const [course, setCourse] = useState("");
  const [error,setError] = useState("");
  const [counter,setCounter] = useState(0)



  const schema = yup.object().shape({
    id: yup.string().max(5).required(),
    name: yup.string().max(5).required(),
    email: yup.string().email().required(),
    rolno: yup.number().max(99999).required().typeError("must 5 characters of number Valid"),
    class: yup.string().max(4).required()
  });

  const submitHandler = async() => {

    let data = {
      id: id,
      name: name,
      email: email,
      rolno: rollno,
      class: course,
    };

    try {
      // let result = await schema.validate(data);
      await schema.validate(data);
      {props.update? props.onUpdateHandler(data): props.onAddHandler(data)}
      // props.onAddHandler(data);
      setId("");
      setName("");
      setEmail("");
      setRolno("");
      setCourse("");
      setError("");
      // console.log(result)

    } catch (error) {
      console.log("error",error.toString())
      setError(error.toString())
    }

    
  };

  return (
    <div>
      {error? <div className="bg-danger p-3 ">{error}</div>: ""}
      
      <input
        type="text"
        value={id}
        placeholder="Enter your id"
        className="bg-light"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        className="bg-light"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        value={email}
        placeholder="Enter your email"
        className="bg-light"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        value={rollno}
        placeholder="Enter your rollno"
        className="bg-light"
        onChange={(e) => setRolno(e.target.value)}
      ></input>
      <input
        type="text"
        value={course}
        placeholder="Enter your course"
        className="bg-light"
        onChange={(e) => setCourse(e.target.value)}
      ></input>

      <br />
      <button className="bg-warning" onClick={submitHandler}>
        {props.update? "Update":"Add"}
      </button>
      
    </div>
  );
}
