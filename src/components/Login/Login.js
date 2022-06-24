import React, { useEffect, useState } from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from '../../firebase_connect';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [registerEmail,setRegisterEmail]=useState("")
  const [registerPassword,setRegisterPassword]=useState("")
  const [loginEmail,setLoginEmail]=useState("")
  const [loginPassword,setLoginPassword]=useState("")
  const [user,setUser]=useState(null)
  const navigate = useNavigate();

  const Login=async ()=>{
    try{
      const user=await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
      console.log(user)
      }
      catch(error)
      {
      console.log(error.message)
      }
  }

  // useEffect(()=>{
  //   onAuthStateChanged(auth,(currentUser)=>{
  //     console.log("currentUser : ",currentUser)
  //     setUser(currentUser)
  //     if(currentUser!=null){
  //       navigate("/About")
  //     }
  //   })
  // },[])

  



  return (
    <div>
      <div className='conatiner display-5'>Login</div>
      <input className='mt-5 ms-3 me-3' type="email" placeholder='Email...' onChange={(e)=>setLoginEmail(e.target.value)}/>
      <input className='ms-3 me-3' type="text" placeholder='Password..' onChange={(e)=>setLoginPassword(e.target.value)} />
      <button className='btn btn-primary' onClick={Login}>Login</button>
      
      <div className='mt-3'>
        <button className='btn btn-danger' onClick={()=>{
          navigate("/Register")
        }}>Sign Up</button>
      </div>

    </div>
    
  )
}

export default Login