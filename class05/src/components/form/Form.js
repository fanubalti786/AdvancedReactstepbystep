import React from "react";
import { useState } from "react";
import * as yup from "yup";

export default function Form(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rollno, setRolno] = useState("");
  const [course, setCourse] = useState("");
  const [error,setError] = useState("");

  const schema = yup.object().shape({
    id: yup.number().max(99999).required(),
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
      props.onAddHandler(data);
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
        className="bg-light"
        onChange={(e) => setId(e.target.value)}
      ></input>
      <input
        type="text"
        className="bg-light"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        className="bg-light"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        className="bg-light"
        onChange={(e) => setRolno(e.target.value)}
      ></input>
      <input
        type="text"
        className="bg-light"
        onChange={(e) => setCourse(e.target.value)}
      ></input>

      <br />
      <button className="bg-warning" onClick={submitHandler}>
        Add!
      </button>
    </div>
  );
}
