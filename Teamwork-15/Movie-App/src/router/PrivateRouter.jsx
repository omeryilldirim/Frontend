import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PrivateRouter = () => {
  const {user} = useAuthContext();
  console.log(user);

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter