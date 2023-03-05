import {Navigate, useNavigate } from "react-router-dom"
import Nav, { Button } from "./Style"

const Navbar = ({setIsLoggedIn}) => {
  const navigate = useNavigate()

  return (
    <Nav>
        <Button onClick={()=>navigate("/")}>{"<mryldrm />"}  <span>RECIPE</span>  </Button>
        <div className="right-nav">
            <Button onClick={()=>navigate("/about")}> ABOUT </Button>
            <Button onClick={()=>window.open("https://github.com/omeryilldirim", '_blank')} > GITHUB </Button>
            <Button  onClick={()=>{
              setIsLoggedIn(false);
              navigate("/login")}}> LOGOUT </Button>
        </div>
    </Nav>
  )
}

export default Navbar