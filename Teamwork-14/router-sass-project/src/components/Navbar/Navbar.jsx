import {useState} from 'react'
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'
import "./Navbar.scss"


const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger =() =>{
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <>
        <div onClick={()=>{
          toggleHamburger()
          }}>
          <Hamburger /> 
        </div>
        <div className='navbar'>
          <Link className='link' to="/" >HOME</Link>
          <Link className='link' to="/about">ABOUT</Link>
          <Link className='link' to="/projects">PORTFOLIO</Link>
          <Link className='link' to="/contact">CONTACT</Link>
        </div>
        <div className='navbar-hamburger' onMouseLeave={()=>setHamburgerOpen(false)}>
          <Link className='link' to="/" >HOME</Link>
          <Link className='link' to="/about">ABOUT</Link>
          <Link className='link' to="/projects">PORTFOLIO</Link>
          <Link className='link' to="/contact">CONTACT</Link>
        </div>
        <style jsx="true">
          {`.navbar-hamburger{
            display:${hamburgerOpen? 'flex' : 'none'}
          }
        `}
        </style>
    </>

  )
}

export default Navbar