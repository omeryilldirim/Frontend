import { createContext, useContext, useState } from "react"

//! 1) Creating Context
export const LoginContext = createContext()


//! 2) Provider
const LoginProvider = ({children}) => {
    //props.children
    const [user, setUser] = useState({ email: "", password: "" })
    const values = {user,setUser}

    return (
        <LoginContext.Provider value={values}>
            {children}
        </LoginContext.Provider>
    )
}

//! 3) Consuming
export const useLoginContext = ()=>{
    return useContext(LoginContext)
}

export default LoginProvider