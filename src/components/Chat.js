
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







//Auth

// import React, {  useState } from 'react'
// import {auth,provider} from '../config/firebase'
// import { signInWithPopup, signOut } from 'firebase/auth'
// import { Room } from './Room';
// import  Cookies  from 'universal-cookie';
// const cookies=new Cookies()





// export const Auth = () => {
  
//    const [islogin,setIsLogin]=useState(cookies.get('authToken'));
//    const [namee,setName]=useState(cookies.get('userName'));
  
//     const signInWithGoogle=async()=>{
//       const result=await signInWithPopup(auth,provider)
//       console.log(result.user.displayName);

//     //   cookies.set("auth-token",result.user.refreshToken)
//     //   setIsAuth(true)
      
//       console.log(result)
//       cookies.set("authToken",result.user.refreshToken)
//       console.log(result.user.refreshToken)

//       cookies.set('userName',result.user.displayName);

//       setIsLogin(true)
//       setName(result.user.displayName)
      

//     }
  

//     const signOutFromWebsite=async()=>{
//      await signOut(auth)
//      cookies.remove("authToken");
  
//      cookies.remove('userName');

//      setIsLogin('')
//      setName('');  
     


//     }

   
//   return (
//     <div>
//         {console.log(islogin)}

//        {
//           islogin?
//           <>
//           <Room namee={namee}/>
//           <div>
//           <button onClick={signOutFromWebsite}>sign out</button>
//          </div>
//           </>:
//           <>
        
//           <h1>sign in with google</h1>
//           <button onClick={signInWithGoogle}>sign in</button>
//           </>


//         }
      
     
   
//     </div>
//   )
// }
