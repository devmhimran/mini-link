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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <h1>Mini Link</h1>
    </div>
  )
}

export default App
