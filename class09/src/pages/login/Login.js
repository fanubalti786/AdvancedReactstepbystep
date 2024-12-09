import React from 'react'
import { useState } from 'react';
export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const loginAuth = ()=>
        {
            alert("LoginAuth");
        }
    
    
        const loginHandler = ()=>
        {
            let user = {
                email,
                password
    
            }
    
    
            loginAuth(user);
    
    
        }
    



  return (
    <div>
      <input
          style={{ padding: 5 }}
          value={email}
          type='email'
          placeholder="Enter your email"
          className="bg-light"
          onChange={(e)=> setEmail(e.target.value)}
        ></input>
        <br />
        <br/>
        <input
          style={{ padding: 5 }}
          value={password}
          type='password'
          placeholder="Enter your password"
          className="bg-light"
          onChange={(e)=> setPassword(e.target.value)}
        ></input>
        <br />
        <br/>
        
        <button
          style={{ padding: 7 }}
          className="bg-warning"
          onClick={loginHandler}
        >
            Login
        </button>
    </div>
  )
}
