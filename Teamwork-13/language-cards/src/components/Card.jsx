import { useState } from "react"
import "./Card.css"

const Card = ({name,img,options}) => {
    const [flip, setFlip] = useState(true)

  return (
    <div 
    className="cardContainer" 
    onClick={()=> setFlip(!flip)} >
        {flip ? (
            <div>
                <img src={img} alt="lang-img" />
                <p>{name}</p>
            </div>
        ) : (
            <ul>
                {options.map((item)=> <li>{item}</li> )}
            </ul>
        )}
    </div>

  )
}

export default Card


