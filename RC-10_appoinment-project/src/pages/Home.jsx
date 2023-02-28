import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { doctorData } from "../helper/data"
import { appointmentData } from "../helper/data"

const Home = () => {
  const [doctors, setDoctors] = useState(doctorData)

  //! Mock Data yerine API'Den veri cekilseydi
  // const getAppointments = async () => {
  //   try {
  //     const { data } = await axios.get("url")
  //     setAppointments(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getAppointments()
  // }, [])

  // console.log(appointments)
  console.log(doctors)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors/>
      <AppointmentList/>
    </main>
  )
}

export default Home
