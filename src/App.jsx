import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Player from './pages/Player/Player'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'



const App = () => {

  const navbar = useNavigate()
useEffect(() => {
  onAuthStateChanged(auth, async(user) => {
if (user) {
  navbar('/')
  console.log('Logged In');
  
} else {
  navbar('/login')
  console.log('Logged Out');
  
}
  })
}, [])

  return (
    <div>
      <Routes>
        <Route path='/'  element= {<Home />}/>
        <Route path='/login'  element= {<Login />}/>
        <Route path='/login'  element= {<Login />}/>
        <Route path='/player/:id'  element= {<Player />}/>

      </Routes>
      
    </div>
  )
}

export default App
