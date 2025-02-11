import React, { useEffect, useState } from 'react'

export default function Testing({value}) {
    const [values,setValues] = useState("")
    useEffect(()=>
    {
      alert("useEffect called")
        setValues(value)
      console.log("useEffect called")

    },[])

  return (
    <div>
      <h1>Testing</h1>
      {values}
      <br />
      {value}
    </div>
  )
}
