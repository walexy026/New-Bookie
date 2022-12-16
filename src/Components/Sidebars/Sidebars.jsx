import React, { useState } from "react";
import "./Sidebars.css";
import { Icon } from "@iconify/react";
import bookieLogo from "../../Assets/bookieLogo.svg";
import { FiLogOut } from "react-icons/fi";
import { BiUserPlus } from "react-icons/bi";
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
import { Link, Outlet } from "react-router-dom";

const Sidebars = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    return setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div className="sidebarwrap">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <ul className="sidebarList">
              <span className="sidebarLogo">
              
                <img src={bookieLogo} alt="bookieLogo" />
                <h2>Bookie</h2>
              </span>
              
              <span className={toggle ?"listside" : null }>
                <li className="sidebarListItem active">
                  <Link to="/dashboard">
                  
                    <Icon
                      icon="icon-park:application-two"
                      fontSize="1.5rem"
                      style={{ marginRight: "1.5rem" }}
                    />
                    Overview
                  </Link>
                </li>
                <li className="sidebarListItem n">
                  <Link to="/dashboard/savings">
                  
                    <Icon
                      icon="material-symbols:savings-rounded"
                      fontSize="1.5rem"
                      style={{ marginRight: "1.5rem" }}
                    />
                    Savings
                  </Link>
                </li>
                <li className="sidebarListItem ">
                  <Link to="/dashboard/wallet">
                  
                    <Icon
                      icon="ion:wallet"
                      fontSize="1.5rem"
                      style={{ marginRight: "1.5rem" }}
                    />
                    Wallets
                  </Link>
                </li>
                <li className="sidebarListItem ">
                  <Link to="/dashboard/Refferal">
                  
                    <BiUserPlus
                      fontSize="1.5rem"
                      style={{ marginRight: "1.5rem" }}
                    />
                    Refferal
                  </Link>
                </li>
                <li className="sidebarListItem ">
                  <Link to="/dashboard/Profiles">
                  
                    <Icon
                      icon="pajamas:profile"
                      fontSize="1.5rem"
                      style={{ marginRight: "1.5rem" }}
                    />
                    Profile
                  </Link>
                </li>
                <li className="sidebarListItem ">
                  <Link to="/dashboard/settings">
                  
                    <Icon
                      icon="material-symbols:settings-rounded"
                      fontSize="1.5rem"
                      style={{ marginRight: "1.5rem" }}
                    />
                    Settings
                  </Link>
                </li>
                <li className="sidebarListItem LogOut">
                
                  <FiLogOut
                    fontSize="1.5rem"
                    style={{ marginRight: "1.0rem" }}
                  />
                  Log out
                </li>
              </span>
              <button className="hamburger" onClick={handleToggle}>
                {toggle ? (
                  <span className="open"><FaBars/></span>
                ) : (
                  <span className="close"><GrClose/></span>
                )}
              </button>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebars;
