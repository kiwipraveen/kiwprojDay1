
import React, { useEffect, useState } from 'react'
import { Room } from './Room';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore';
import { auth, dataBase } from '../config/firebase';

export const Chat = (props) => {
    const {inputValue}=props;
    const [prev,setprev]=useState(false)
    //to store the data that we get from firebase
    const [dataa,setDataa]=useState([]);


    const [msg,setMsg]=useState('')
  
  useEffect(()=>{
    const eceMsg=query(
      collection(dataBase,"info"),
      where("room","==",inputValue),
      orderBy("time")
      
    )
   onSnapshot(eceMsg,(data)=>{
   let store=[];

     data.forEach((obj)=>{
      store.push({...obj.data(),id:obj.id})
   })
   console.log(store);
   setDataa(store);
   })
  },[])
     
  const prevv=()=>{
    setprev(true)
  }

 const sentChat=async(event)=>{
  event.preventDefault();

  await addDoc(collection(dataBase,"info"),{

    text:msg,
    room:inputValue,
    user:auth.currentUser.displayName,
    time:serverTimestamp(),
  })
  setMsg('')
 }

  return (
    <>
    { prev?<Room/> : 
    <>
    <div>
    <div>welcome : {inputValue} </div>
     {
      dataa.map((obj)=>{
        return <p><strong>{obj.user} :</strong>{obj.text}</p>
      })
     }
    </div>
    <div>
       <form onSubmit={sentChat} >
       <input value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='type ur msg'/>
       <button type='submit' >send</button>
       </form>
    </div>
    <button onClick={prevv} >prev</button> 

    </>
   }
    </>
  )
}






