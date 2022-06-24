import React, {useEffect,useState} from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import DrawerAppBar from './components/AppBar/AppBar'
import {Route,Routes,Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase_connect';
import {createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth'
function App() {

  const [user,setUser]=useState(null)
  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      console.log("currentUser : ",currentUser)
      setUser(currentUser)
      if(currentUser!=null){
        navigate("/About")
      }
      else{
        navigate("/Login")
      }
    })
  },[])



  return (
        <div>
          {user!=null && <DrawerAppBar/>}
          <Routes>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/' element={<Login/>}/>
          </Routes>
          {/* {user==null && <Login/>} */}
        </div>
    )
}

export default App