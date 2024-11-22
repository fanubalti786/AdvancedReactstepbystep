import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRolno] = useState("");
  const [course, setCourse] = useState("");

  let check = true;

  const submitHandler = () => {
    if (
      id === "" ||
      name === "" ||
      email === "" ||
      rollno === "" ||
      course === ""
    ) {
      alert("All fields must be full");
      check = false;
    }

    if (isNaN(id) === true && check === true) {
      alert("id must be a number");
      check = false;
    }

    if (email.includes('@') === false && check===true) {
      alert("@ must required in email");
      check = false;
    } 
    
    if(check===true) {
      let data = {
        id: id,
        name: name,
        email: email,
        rolno: rollno,
        class: course,
      };

      props.onAddHandler(data);
      // console.log(data)
    }
  };

  return (
    <div>
      <input type="text" className='bg-light' onChange={(e) => setId(e.target.value)}></input>
      <input type="text" className='bg-light' onChange={(e) => setName(e.target.value)}></input>
      <input type="text" className='bg-light' onChange={(e) => setEmail(e.target.value)}></input>
      <input type="text" className='bg-light' onChange={(e) => setRolno(e.target.value)}></input>
      <input type="text" className='bg-light' onChange={(e) => setCourse(e.target.value)}></input>

      <br />
      <button className="bg-warning" onClick={submitHandler}>Add!</button>
    </div>
    )}
