import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <Link to={""}>{"<mryldrm />"} RECIPE </Link>
        <div>
            <Link to={"/about"}> ABOUT </Link>
            <Link to={"https://github.com/omeryilldirim"} target="_blank"> GITHUB </Link>
            <Link to={"/login"}> LOGOUT </Link>
        </div>

    </div>
  )
}

export default Navbar