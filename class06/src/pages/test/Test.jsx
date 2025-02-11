import React from 'react'
import { useState } from 'react'
import Testing from '../../components/testing/Testing'

export default function Test() {
    const [value,setValue] = useState('')
  return (
    <div>
      <h1>Test</h1>
      <Testing value={value}/>
      <button onClick={()=>setValue("hello")}>click</button>
    </div>
  )
}
