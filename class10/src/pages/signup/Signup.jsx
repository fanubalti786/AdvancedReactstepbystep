import React from 'react'
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { userSignIn } from '../../store/Slices/UsersEnroll';




const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      border: "2px solid black"
    },
    formWrapper: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      width: '300px',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333333',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#555555',
      fontSize: '14px',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #cccccc',
      marginBottom: '15px',
      fontSize: '14px',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#3b82f6',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#2563eb',
    },
    footer: {
      textAlign: 'center',
      marginTop: '15px',
      fontSize: '14px',
      color: '#666666',
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
    },
  };

export default function Signup() {

    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const dispatch = useDispatch();

    const submitHadler = ()=>
    {
        let user = {
            fullName,
            email,
            password
        }

        dispatch(userSignIn(user))

        
    }



  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>Create Account</h2>
        <form>
          <label htmlFor="name" style={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={fullName}
            placeholder="Enter your name"
            onChange={(e)=>setFullName(e.target.value)}
            style={styles.input}
          />
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            style={styles.input}
          />
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            style={styles.input}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
            onClick={()=>submitHadler}
            
          >
            Sign Up
          </button>
        </form>
        <p style={styles.footer}>
          Already have an account?{' '}
          <a href="#" style={styles.link}>
            Log in
          </a>
        </p>
      </div>
    </div>
  )
}
