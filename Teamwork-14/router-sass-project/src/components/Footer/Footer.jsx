import { FaGithub,FaLinkedin,FaMailBulk } from 'react-icons/fa';
import "./Footer.scss"
import {Link} from"react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icons'>
          <Link to="https://github.com/omeryilldirim" target="_blank"><FaGithub className='github-icon' size="40px"/></Link>
          <Link to="https://www.linkedin.com/in/omer-yilldirim/" target="_blank"><FaLinkedin className='linkedin-icon' size="40px"/></Link>
          <Link to="mailto:omeryilldirim@outlook.com" target="_blank"><FaMailBulk className='mail-icon' size="40px"/></Link>
        </div>
        <div className='copyright'>
            <p> &copy; Copyright {new Date().getFullYear()} </p>
        </div>
    </div>
  )
}

export default Footer