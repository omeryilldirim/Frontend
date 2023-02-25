import { useState } from "react";
import { arrowup } from "../helper/icons";
import { arrowdown } from "../helper/icons";

const Question = ({data}) => {
const [toggle, setToggle] = useState(false)

    return (
    <div className="card">
        <div className="ques" >
            <h5>{data.id}.{data.question} </h5>
            <button onClick={()=>setToggle(!toggle)}>{toggle ? arrowup : arrowdown}</button>
            
        </div>
        <div className="answer">
            <p>{toggle && (data.answer) }</p>
        </div>
    </div>
  )
}

export default Question