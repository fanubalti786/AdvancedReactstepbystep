import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux'
import { logInAuth } from '../../store/Slices/UserSlice';
export default function Login() {

  const users = useSelector((state)=>state.UserSlice.users)

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch()

    
    
    
        const loginHandler = ()=>
        {
            let user = {
                email,
                password
    
            }
    
    
          dispatch(logInAuth(user));
    
    
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

        {users.length > 0 && users.map((value)=>
        {
          return (
            <dive>
            <h1>{value.fullName}</h1>
            <h1>{value.email}</h1>
            <h1>{value.password}</h1>


            </dive>
          )
        })}
    </div>
  )
}
