import React from 'react'

export default function Form() {
  return (
    <div>
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
    </div>
  )
}
