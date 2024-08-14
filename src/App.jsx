import { Routes, Route, Link} from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Login from './component/login'
import Profile from './component/Profile'
import Register from "./component/register";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </>
  )
}

export default App
