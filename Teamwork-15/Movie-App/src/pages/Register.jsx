import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { auth } from "../firebase-config";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const { setUser} = useAuthContext()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const data = await createUserWithEmailAndPassword(
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
      <h1>REGISTER</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          id="email"
          placeholder="username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Register;
