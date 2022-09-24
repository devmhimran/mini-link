import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NavMenu from './Component/NavMenu/NavMenu';
import Login from './Component/Login/Login';

function App() {

  return (
    <div className="App ">
      <NavMenu></NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
