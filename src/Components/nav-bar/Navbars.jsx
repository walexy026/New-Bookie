// import React, { useState } from "react";
// import Logo from "../../Assets/logo.svg";
// import {FaBars} from 'react-icons/fa'
// import {GrClose} from "react-icons/gr";
// import dropDown from "../../Assets/drop-down.svg";
// import "./Navbar.css";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => {
//     return setToggle(prevToggle =>!prevToggle)
//   }
//   return (
//     <header>
//       <div className="navLogo">
//         <img src={Logo} alt="logo" className="nav-logo" />
//         <h2>Bookie</h2>
//       </div>
//       <ul  className={toggle ? "navLinks" : "navShow"}>
//       {/* <ul className="navLinks"> */}
//         <li className="lists">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>
//         <li className="lists">About </li>
//         <li className="lists">
//           Services <img src={dropDown} alt="drop" className="drop-down" />
//         </li>
//         <li className="lists">
//           More <img src={dropDown} alt="drop" className="drop-down" />
//         </li>
//       </ul>
//       <div className="navbtn">
//         <button className="navbtnlogin"><Link to='/login'>Login</Link></button>
//         <button className="navbtnsignup"><Link to='/signup'>Sign Up</Link></button>
//         <button className="hamburger" onClick={handleToggle}>
//           {toggle ? (
//             <span className="open"><FaBars/> </span>
//           ) : (
//             <span className="close"><GrClose/></span>
//           )}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../Assets/logo.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbars = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <div className="navLogo">
      <Link to='/' >  <img src={Logo} alt="logo" className="nav-logo" />
         <h2>Bookie</h2></Link>
       </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About </Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Buy Books</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Pay Fees
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
               Read Online Books              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Contact Us
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <button className="navbtnlogin mx-4 "><Link to='/login'>Login</Link></button>
      <button className="navbtnsignup mx-4"><Link to='/signup'>Sign Up</Link></button>
            {/* <Button variant="outline-success">Search</Button>
            <Button variant="outline-success">Search</Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars;