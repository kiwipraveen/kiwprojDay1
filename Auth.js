import React, {  useState } from 'react'
import {auth,provider} from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import { Room } from './Room';
import  Cookies  from 'universal-cookie';
const cookies=new Cookies()





export const Auth = () => {
  
   const [islogin,setIsLogin]=useState(cookies.get('kiwi'));
   const [namee,setName]=useState(cookies.get('name'));
  
    const signInWithGoogle=async()=>{
      const result=await signInWithPopup(auth,provider)
      console.log(result.user.displayName);

    //   cookies.set("auth-token",result.user.refreshToken)
    //   setIsAuth(true)
      
      console.log(result)
      cookies.set("kiwi",result.user.refreshToken)
      console.log(result.user.refreshToken)

      cookies.set('name',result.user.displayName);

      setIsLogin(true)
      setName(result.user.displayName)
      

    }
  

    const signOutFromWebsite=async()=>{
     await signOut(auth)
     cookies.remove("kiwi");
  
     cookies.remove('name');

     setIsLogin('')
     setName('');  
     


    }

   
  return (
    <div>
        {console.log(islogin)}

       {
          islogin?
          <>
          <Room namee={namee}/>
          <div>
          <button onClick={signOutFromWebsite}>sign out</button>
         </div>
          </>:
          <>
        
          <h1>sign in with google</h1>
          <button onClick={signInWithGoogle}>sign in</button>
          </>


        }
      
     
   
    </div>
  )
}
