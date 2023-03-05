import { Link } from "react-router-dom"
import Nav from "./Style"

const Navbar = ({setIsLoggedIn}) => {

  return (
    <Nav>
        <Link to="">{"<mryldrm />"} RECIPE </Link>
        <div className="right-nav">
            <Link to="/about"> ABOUT </Link>
            <Link to="https://github.com/omeryilldirim" target="_blank"> GITHUB </Link>
            <Link to="/login" onClick={()=>setIsLoggedIn(false)}> LOGOUT </Link>
        </div>

    </Nav>
  )
}

export default Navbar