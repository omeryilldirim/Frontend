import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div>
        {isLoggedIn ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter