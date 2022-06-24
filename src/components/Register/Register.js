import React, { useEffect, useState } from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from '../../firebase_connect';
import {Link,Routes,Route,useNavigate} from 'react-router-dom'
import Login from '../Login/Login';
function Register() {
  const [registerEmail,setRegisterEmail]=useState("")
  const [registerPassword,setRegisterPassword]=useState("")
  const [user,setUser]=useState(null)
  const navigate = useNavigate();
  
//   const Login=async ()=>{
//     try{
//       const user=await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
//       console.log(user)
//       }
//       catch(error)
//       {
//       console.log(error.message)
//       }
//   }

//   const Logout= async()=>{
//     await signOut(auth)
//   }
// useEffect(()=>{
//   onAuthStateChanged(auth,(currentUser)=>{
//     console.log("currentUser : ",currentUser)
//     setUser(currentUser)
//   })
// },[])
  

  const register= async()=>{
    try{
    const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
    console.log(user)
    if(user!=null){
      navigate("/Home")
    }
    }
    catch(error)
    {
    console.log(error.message)
    }
  }


  return (
    <div>
      <div>
        <div className='conatiner display-5'>Register</div>
        <input className='mt-5 ms-3 me-3' type="email" placeholder='Email...' onChange={(e)=>setRegisterEmail(e.target.value)} />
        <input className='ms-3 me-3' type="text" placeholder='Password..' onChange={(e)=>setRegisterPassword(e.target.value)}/>
        <button className='btn btn-primary' onClick={register}>Create User</button>
      </div>
      <div>
        <button className='btn btn-primary' onClick={()=>{
          navigate("/Login")
        }}>Sign In</button>
      </div>
    </div>
  )
}

export default Register