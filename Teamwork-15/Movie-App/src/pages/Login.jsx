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
    <div className='flex items-center justify-center flex-col min-h-[90vh] gap-8 bg-color4'>
      <h1 className='text-3xl'>LOGIN</h1>
      <form className='flex items-start justify-start flex-col gap-4 w-[250px]' onSubmit={handleLogin}>
        <label className='text-xl' htmlFor="email" >Email</label>
        <input className='text-xl px-3 py-1 w-full rounded' type="text" id='email' placeholder='username' required onChange={(e)=>setEmail(e.target.value)}/>
        <label className='text-xl' htmlFor="password">Password</label>
        <input className='text-xl px-3 py-1 w-full rounded' type="password" id='password' placeholder='password' required onChange={(e)=>setPassword(e.target.value)}/>
        <button className='w-full bg-color1 text-color2 text-xl p-1 rounded' type="submit">Login</button>
      </form>

    </div>
  )
}

export default Login