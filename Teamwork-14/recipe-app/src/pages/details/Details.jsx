import { useLocation } from "react-router-dom"
import diet from "../../assets/diet.svg"

const Details = () => {
  const {state:{recipe}} = useLocation()
  console.log(recipe);
  return (
    <div>
        <img src={diet} alt="detail" />
        Details
    </div>
  )
}

export default Details