import React, { useState } from 'react'
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from '../../firebase_connect';
function Login() {
  const [registerEmail,setRegisterEmail]=useState("")
  const [registerPassword,setRegisterPassword]=useState("")
  const [loginEmail,setLoginEmail]=useState("")
  const [loginPassword,setLoginPassword]=useState("")
  const [user,setUser]=useState({})

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

  const Logout= async()=>{
    await signOut(auth)
  }
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
  })

  const register= async()=>{
    try{
    const user=await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
    console.log(user)
    }
    catch(error)
    {
    console.log(error.message)
    }
  }

  return (
    <div>
      <div className='conatiner display-5'>Register</div>
      <input className='mt-5 ms-3 me-3' type="email" placeholder='Email...' onChange={(e)=>setRegisterEmail(e.target.value)} />
      <input className='ms-3 me-3' type="text" placeholder='Password..' onChange={(e)=>setRegisterPassword(e.target.value)}/>
      <button className='btn btn-primary' onClick={register}>Create User</button>
      <div className='conatiner display-5'>Login</div>
      <input className='mt-5 ms-3 me-3' type="email" placeholder='Email...' onChange={(e)=>setLoginEmail(e.target.value)}/>
      <input className='ms-3 me-3' type="text" placeholder='Password..' onChange={(e)=>setLoginPassword(e.target.value)} />
      <button className='btn btn-primary' onClick={Login}>Login</button>
      <div className='mt-3'>
          <h3>User Logged in:</h3>
          {user?.email}
          <button className='btn btn-danger' onClick={Logout}>Sign Out</button>
      </div>

    </div>
    
  )
}

export default Login