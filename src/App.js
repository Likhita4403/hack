import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import DrawerAppBar from './components/AppBar/AppBar'
import {Route,Routes} from 'react-router-dom'
<Routes>
  <Route path='/Home' element={<Home/>}/>
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/About' element={<About/>}/>
</Routes>
function App() {
  return (
        <div>
          <DrawerAppBar/>
        </div>
    )
}

export default App