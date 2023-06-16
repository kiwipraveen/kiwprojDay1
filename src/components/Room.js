import React, { useState } from 'react'
import { Chat } from './Chat';

export const Room = (props) => {
    const {namee}=props;
    const [inputValue,setInputValue]=useState('')
    const [btnClicked,setbtnClicked]=useState(false)

   
    
   const  goChatPage=()=>{
       setbtnClicked(true)
  
    }
  
    return (
    <div>
     {
        btnClicked ?
        <Chat inputValue={inputValue}/>
        :
        <>
        <h1>WELCOME TO ROOM {namee}</h1>
        <input onChange={(e)=>setInputValue(e.target.value)}/>
    
        <button onClick={goChatPage}>Enter chat</button>

        </>
     }
    </div>

  )
}
