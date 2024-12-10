import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { signInAuth } from '../../store/Slices/UserSlice';
import { Link } from 'react-router-dom';


export default function Signin() {

  // const users = useSelector((state)=> state.UserSlice.users)
  // console.log(users)
    const [fullName,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch()
    


    const submitHandler = ()=>
    {
        let user = {
            fullName,
            email,
            password

        }

        dispatch(signInAuth(user));

        setEmail("");
        setPassword("");
        setName("");
        


    }



  return (
    <div>
      <input
          style={{ padding: 5 }}
          type="text"
          value={fullName}
          placeholder="Enter your name"
          className="bg-light"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br/>
        <br/>
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
        
       <Link to={"/Login"}><button
          style={{ padding: 7 }}
          className="bg-warning"
          onClick={submitHandler}
        >
            Submit
        </button></Link>

        {/* {users?
            <dive>
            <h1>{users.fullName}</h1>
            <h1>{users.email}</h1>
            <h1>{users.password}</h1>


            </dive>
          : <h1>SignUp first Please</h1>} */}

    </div>
  )
}
