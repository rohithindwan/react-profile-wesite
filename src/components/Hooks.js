import React from 'react'
import { useState } from 'react'

export default function Hooks() {
    const [count, setCount] = useState(0)
    const [pluse, setpluse] = useState(count)
   
  return (
    <div>
        <h1>you click {count} time</h1>
        <button onClick={()=>setCount(count+1)}>click here</button>
        <button onClick={()=>setpluse(pluse)}>click{pluse} here</button>
    </div>
  )
}
