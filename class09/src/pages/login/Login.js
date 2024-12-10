import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { logInAuth } from '../../store/Slices/UserSlice';

export default function Login() {

  // const users = useSelector((state)=>state.UserSlice.users)

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
        <br/>
        <br/>
        <Link to={"/Signin"}><button
          style={{ padding: 7 }}
          className="bg-warning"
        >
            SignUp
        </button></Link>

        {/* {users?
            <dive>
            <h1>{users.fullName}</h1>
            <h1>{users.email}</h1>
            <h1>{users.password}</h1>
            <h1>{users.id}</h1>


            </dive>
        : <h1>Please Login with Actual Id</h1>} */}
    </div>
  )
}
