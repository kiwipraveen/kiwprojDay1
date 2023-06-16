// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'; 



const firebaseConfig = {
  apiKey: "AIzaSyAagQDU77iXpfeURvZ0TNaAdmB5zOEs8d0",
  authDomain: "kiwi-eca09.firebaseapp.com",
  projectId: "kiwi-eca09",
  storageBucket: "kiwi-eca09.appspot.com",
  messagingSenderId: "97134153202",
  appId: "1:97134153202:web:547d2e28ec879bed2a2f6b"
};



const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);

export const provider=new GoogleAuthProvider();

export const dataBase=getFirestore(app);
