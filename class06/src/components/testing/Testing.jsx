import React, { useEffect, useState } from 'react'

export default function Testing({value}) {
    const [values,setValues] = useState("")
    useEffect(()=>
    {
        setValues(value)
    })
  return (
    <div>
      Testing
      {values}
      <br />
      {value}
    </div>
  )
}
