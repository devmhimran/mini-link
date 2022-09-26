import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import Loading from './Component/Loading/Loading';
import Dashboard from './Component/Dashboard/Dashboard';
import RequireAuth from './Component/RequireAuth/RequireAuth';

function App() {

  return (

    <div className="App ">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} />
      </Routes>

    </div>

  )
}

export default App
