import { Navigate, Outlet } from "react-router-dom"
import Login from "./Login"

//? Bu kisim gercekte Global State'lerde tutulur. (Context API, Redux, Mobx)
//! const isSigned = userContext(jwt)

const isSigned = false

const PrivateRouter = () => {
  return <div> {isSigned ? <Outlet/> : <Navigate to="/login"/> } </div>
}

export default PrivateRouter