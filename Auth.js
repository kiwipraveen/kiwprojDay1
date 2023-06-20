import React, { useState } from 'react'

import { dataBase } from '../config/firebase'
import { addDoc, collection, getDocs, updateDoc ,doc, deleteDoc} from 'firebase/firestore';


export const Auth = () => {
  const [namee,setNamee]=useState('')
  const [age,setAge]=useState('');
  const [info,setInfo]=useState([]);

  

//  const connectionReference=collection(db,'users');
//  const data={
//   name:namee,
//   age:age
//  }`

 const  addDataToDataBase=async()=>{
   //    addDoc(connectionReference,data)
  await addDoc(collection(dataBase,"users"),{
    name:namee,
    age:age
  });
  setNamee('');
  setAge('');

  getFirebaseData()
 }




const getFirebaseData=async()=>{
  let data=await getDocs(collection(dataBase,"users"));
   let filteredData=data.docs.map((document)=>({
      ...document.data(),
      id:document.id,
 }))
//  console.log(filteredData)
setInfo(filteredData)
}


const updateData=async(idName)=>{
  await updateDoc(doc(dataBase,"users",idName),{
    name:"kiwi"
  }) 
  getFirebaseData();
  
}

const deleteData=async(idName)=>{
  await deleteDoc(doc(dataBase,"users",idName))
  getFirebaseData();
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
     

     <button onClick={getFirebaseData}>read</button>
    {
     info.map((obj)=>{
      {console.log(obj)}
      return <>
                <h1>{obj.name}</h1>
                <h1>{obj.age}</h1> 
                <h1>{obj.id}</h1>
                <button onClick={()=>updateData(obj.id)}>update</button>
                <button onClick={()=>deleteData(obj.id)}>delete</button>
                
              </>
     })


    }
    </>
  )
}
