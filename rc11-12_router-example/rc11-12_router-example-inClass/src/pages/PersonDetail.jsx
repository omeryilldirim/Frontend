import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const PersonDetail = () => {
  //! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz
  // const { state: person } = useLocation()
  const navigate = useNavigate()
  const [isPersonExist, setIsPersonExist] = useState(true)

  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  const { id } = useParams()
  const [person, setPerson] = useState({})

  const getPerson = () => {
    try {
      fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
         if (res.status >= 400){
          throw new Error('User fault');
         }
        res.json()})
      .then((data) => setPerson(data.data))
      .catch((err) => setIsPersonExist(false))
    } catch (error) {
      console.log(error);
      setIsPersonExist(false)
    }
  }
  useEffect(() => {
    getPerson()
  }, [])


  return (
    <div className="container text-center">
      {isPersonExist ? (
        <div>
          <p>person</p>
            <h3>
              {person?.first_name} {person?.last_name}
            </h3>
            <img className="rounded" src={person?.avatar} alt="" />
            <p>{person?.email}</p>
        </div>
      ):(
        <div className="m-5 bg-danger text-light p-5">This person does not exist</div>
      )}
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  )
}

export default PersonDetail
