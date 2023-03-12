import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { auth } from "../firebase-config";
import {signOut} from "firebase/auth";

const Navbar = () => {
  const { user,setUser } = useAuthContext();
  
  const handleLogout = async () => {
    await signOut(auth);
    setUser();
  }
  return (
    <div>
      <Link to="/">Movie App</Link>
      {user ? (
        <>
          <p>User : {user?.email}</p>
          <Link to="/" onClick={handleLogout}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
