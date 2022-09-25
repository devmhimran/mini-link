import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';

function App() {

  return (
    
    <div className="App ">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
 
    </div>
    
  )
}

export default App
