import React, { useState } from 'react'

import { dataBase } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore';


export const Auth = () => {
  const [namee,setNamee]=useState('')
  const [age,setAge]=useState('');


  

//  const connectionReference=collection(db,'users');
//  const data={
//   name:namee,
//   age:age
//  }

 const  addDataToDataBase=async()=>{
   //    addDoc(connectionReference,data)
  await addDoc(collection(dataBase,"users"),{
    name:namee,
    age:age
  });
  setNamee('');
  setAge('');
 }

  return (
    <>
    Name:<input placeholder='enter ur name' onChange={(e)=>setNamee(e.target.value)}  value={namee}/>
    <br/>
    Age:<input placeholder='age' onChange={(e)=>setAge(e.target.value)} value={age} />
    <br/>
    <button onClick={addDataToDataBase}>create / write</button>
    {/* <br/>
    work:<input placeholder='enter ur  name of work' onChange={(e)=>setNamee(e.target.value)}/>
    <br/>
    Rating:<input placeholder='rating' onChange={(e)=>setAge(e.target.value)}/>
    <br/>
    <button onClick={addDataToDataBaseWorks}>create / write</button> */}
    <h1>{namee}</h1>
    <h1>{age}</h1>
    </>
  )
}
