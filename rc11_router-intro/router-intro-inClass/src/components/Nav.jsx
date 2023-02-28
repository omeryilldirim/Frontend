import { Link, NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink
          to="/instructors"
          style={({ isActive }) => ({
            color: isActive && "red",
          })}
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive && "red",
          })}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav
