import {useDispatch} from "react-redux"
import { loginSuccess, fetchStart, fetchFail } from '../features/authSlice'
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

  return {login}
}

export default useAuthCall