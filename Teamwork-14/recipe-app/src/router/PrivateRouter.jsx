import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = ({isLoggedIn}) => {
    

  return (
    <div>
        {isLoggedIn ? <Outlet/> : <Navigate to="/login"/>}
    </div>
  )
}

export default PrivateRouter