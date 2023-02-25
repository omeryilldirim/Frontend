import { useState } from "react";
import { arrowup } from "../helper/icons";
import { arrowdown } from "../helper/icons";

const Question = ({data}) => {
const [toggle, setToggle] = useState(false)
const {id, question,answer} = data
    return (
    <div className="card">
        <div className="ques" >
            <h5>{id}.{question} </h5>
            <button onClick={()=>setToggle(!toggle)}>{toggle ? arrowup : arrowdown}</button>
            
        </div>

        <p>{toggle && (answer) }</p>

    </div>
  )
}

export default Question