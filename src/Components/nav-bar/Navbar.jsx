import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/logo.svg'
import Cart from '../../Assets/Vector.svg'
import dropDown from '../../Assets/drop-down.svg'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="nav-logo-container">
            <img src= {Logo} alt="logo"  className='nav-logo'/>
            <h2 className="brandname">Bookie</h2>
        </div>
        <div className="navbar-list-container">
            <ul>
                <li><Link to= '/' className='nav-link'>Home</Link></li>
                <li><Link to= '/savemoney' className='nav-link'>About </Link></li>
                <li><Link to= '/allbooks' className='nav-link'>Services </Link><img src= {dropDown} alt="drop"  className='drop-down'/></li>
                <li><Link to= '/buybooks' className='nav-link'>More </Link> <img src= {dropDown} alt="drop"  className='drop-down'/></li>
            </ul>
        </div>
        <div className="nav-right-container">
            <img src={Cart} alt="cart"  className='cart'/>
            <button className="nav-login-btn">Login</button>
            <button className="nav-signup-btn">Sign Up</button>
        </div>
    </nav>
  )
}
