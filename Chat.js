import React, { useState } from 'react'
import { Room } from './Room';

export const Chat = (props) => {
    const {inputValue}=props;
    const [prev,setprev]=useState(false)


  const prevv=()=>{
    setprev(true)
  }
  return (
    <>
    { prev?<Room/> : 
    <>
    
    <div>welcome : {inputValue} </div>
    <button onClick={prevv}>prev</button>

    </>
   }
    </>
  )
}
