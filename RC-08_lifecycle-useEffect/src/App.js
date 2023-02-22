import { useState } from "react"
import LifeCycleMethods from "./components/LifeCycleMethods"

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="container text-center mt-4">
      
      <button className="btn btn-danger" onClick={()=>setToggle(!toggle)}> 
        {toggle ? "Hide" : "Show"} 
      </button>

      {toggle ? <LifeCycleMethods /> : null}
      
    </div>
  )
}

export default App
