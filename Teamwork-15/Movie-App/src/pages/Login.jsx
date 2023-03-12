import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase-config";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const {setUser} = useAuthContext()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(data.user);
      navigate(-1)
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email" >Email : </label>
        <input type="text" id='email' placeholder='username' required onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="password">Password : </label>
        <input type="password" id='password' placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>

    </div>
  )
}

export default Login