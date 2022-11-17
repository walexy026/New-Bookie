import React from "react";
import "./Sidebars.css";


const Sidebars = () => {
  return (
    <div>
      Sidebars
      <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <ul className="sidebarList">
          <li className="sidebarListItem active"> Overview</li>
          <li className="sidebarListItem "> Savings</li>
          <li className="sidebarListItem "> Wallets</li>
          <li className="sidebarListItem ">   Refferal</li>
          <li className="sidebarListItem ">Profile</li>
          <li className="sidebarListItem ">  Settings</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebars;
