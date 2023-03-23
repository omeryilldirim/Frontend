import {useDispatch} from "react-redux"
import { loginSuccess, fetchStart, fetchFail, registerSuccess, logoutSuccess } from '../features/authSlice'
import {useNavigate} from "react-router-dom"
import axios from "axios"

const useAuthCall = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async (userInfo) => {
    const BASE_URL = "https://12253.fullstack.clarusway.com/"

    dispatch(fetchStart())
    try {
        const {data} = await axios.post(`${BASE_URL}account/auth/login/`, userInfo)
        dispatch(loginSuccess(data))
        navigate("/stock")
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    }
  }


  const register = async (userInfo) => {
    const BASE_URL = "https://12253.fullstack.clarusway.com/"

    dispatch(fetchStart())
    try {
      const {data} = await axios.post(`${BASE_URL}account/register/`, userInfo)
      dispatch(registerSuccess(data))
      navigate("/stock")
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
    }
  }


  const logout = async () => {
    dispatch(logoutSuccess())
    navigate("/")
  }



  return {login, register, logout}
}

export default useAuthCall