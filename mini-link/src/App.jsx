import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

function App() {

  return (
    
    <div className="App ">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
 
    </div>
    
  )
}

export default App
