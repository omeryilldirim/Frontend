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
    <div className="flex items-center justify-between p-6 bg-color1">
      <Link className="text-2xl text-red-800 hover:text-color2 font-bold" to="/">Movie App</Link>
      {user ? (
        <div className="flex gap-8 text-xl text-color2 ">
          <p>{user?.email}</p>
          <Link className="hover:text-red-800" to="/" onClick={handleLogout}>Logout</Link>
        </div>
      ) : (
        <div className="flex gap-8 text-xl text-color2 ">
          <Link className="hover:text-red-800" to="/login">Login</Link>
          <Link className="hover:text-red-800" to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
