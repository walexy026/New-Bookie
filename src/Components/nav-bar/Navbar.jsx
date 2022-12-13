import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.svg";
import {} from "react-icons";
import dropDown from "../../Assets/drop-down.svg";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
  }
  return (
    <header>
      <div className="navLogo">
        <img src={Logo} alt="logo" className="nav-logo" />
        <h2>Bookie</h2>
      </div>
      <ul  className={toggle ? "navLinks" : "navShow"}>
      {/* <ul className="navLinks"> */}
        <li className="lists">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="lists">About </li>
        <li className="lists">
          Services <img src={dropDown} alt="drop" className="drop-down" />
        </li>
        <li className="lists">
          More <img src={dropDown} alt="drop" className="drop-down" />
        </li>
      </ul>
      <div className="navbtn">
        <button className="navbtnlogin"><Link to='/login'>Login</Link></button>
        <button className="navbtnsignup"><Link to='/signup'>Sign Up</Link></button>
        <button className="hamburger" onClick={handleClick}>
          {toggle ? (
            <span className="open">&#9776;</span>
          ) : (
            <span className="close">&times;</span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;

// export default function Navbar() {
//     const [toggle, setToggle] = useState(true);

//     function handleClick() {
//         return setToggle((preToggle) => !preToggle);
//       }
//   return (

//     <nav className='navs'>
//         <div className="nav-logo-container">
//             <img src= {Logo} alt="logo"  className='nav-logo'/>
//             <h2 className="brandname">Bookie</h2>
//         </div>

//         <div className={toggle ? "navLink" : "navShow"}>
//             <ul className='navslink'>
//                 <li><Link to= '/' className='nav-link'>Home</Link></li>
//                 <li><Link to= '/savemoney' className='nav-link'>About </Link></li>
//                 <li><Link to= '/allbooks' className='nav-link'>Services </Link><img src= {dropDown} alt="drop"  className='drop-down'/></li>
//                 <li><Link to= '/buybooks' className='nav-link'>More </Link> <img src= {dropDown} alt="drop"  className='drop-down'/></li>
//             </ul>

//         </div>
//       <div className="nav-right-container">
//             <img src={Cart} alt="cart"  className='cart nomobile '/>
//             <button className="nav-login-btn"> <Link to='/login'>Login</Link></button>
//             <button className="nav-signup-btn nomobile" > <Link to='/signup'>Sign Up</Link></button>
//         </div>
//         <button className="hamburger" onClick={handleClick}>
//           {toggle ? (
//             <span className="open">&#9776;</span>
//           ) : (
//             <span className="close">&times;</span>
//           )}
//         </button>

//     </nav>
//   )
// }
