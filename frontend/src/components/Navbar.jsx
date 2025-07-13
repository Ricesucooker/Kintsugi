import { Link } from 'react-router-dom'
import '../style/navbar.css'

function Navbar() {
  return (
    <nav className='navbar flex flex-row justify-between h-24 gap-4' >
        <div className='navbar-left '>
            <a>Talk with Tsuki</a>
        </div>
        <div className='navbar-center '>
            <ul className='nav-links flex flex-row space-x-4'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Chat">Chat</Link>
                </li>
                 <li>
                    <Link to="/TalkV1">v1Chat</Link>
                </li>
                <li>
                    <Link to="/Feedback">Feedback</Link>
                </li>
            </ul>
        </div>

        <div className='navbar-right'>
            <ul className='flex flex-row space-x-4 '>
                <li>
                    <a herf='#' className='login'>Sign In</a>
                </li>
                <li>
                    <a herf='#' className='register'>Register</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar