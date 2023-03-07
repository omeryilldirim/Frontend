import {Link} from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='link' to="/" >HOME</Link>
        <Link className='link' to="/about">ABOUT</Link>
        <Link className='link' to="/projects">PROJECTS</Link>
        <Link className='link' to="/contact">CONTACT</Link>
    </div>
  )
}

export default Navbar