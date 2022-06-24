import React from 'react'
import { Route, Link, Routes, Router } from 'react-router-dom'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Login from '../Login/Login'
import About from '../About/About'

function Navbar() {
  return (
    <div>
      <div className=' h-50 text-center border border-indigo-600 p-5 mx-auto text-orange-400 '>
        <div>
          <Link className='text-2xl m-5 p-5' to='/home'>HOME</Link>
          <Link className='text-2xl m-5 p-5' to='./about'>ABOUT</Link>
          <Link className='text-2xl m-5 p-5' to='./login'>LOGIN</Link>
          <Link className='text-2xl m-5 p-5' to='/contact'>CONTACT</Link>
        </div>
      </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )

}

export default Navbar