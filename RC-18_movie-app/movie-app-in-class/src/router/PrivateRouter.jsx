import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRouter = () => {
    const {currentUser } = useContext(AuthContext)
  return (
    <div>
        {currentUser ? <Outlet/> : <Navigate to="/login" />}
    </div>
  )
}

export default PrivateRouter