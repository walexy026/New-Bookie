import React from "react";
import "./Sidebars.css";
import { Icon } from '@iconify/react';

const Sidebars = () => {
  return (
    <div>
      Sidebars
      <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <ul className="sidebarList">
          <li className="sidebarListItem active"><Icon icon="icon-park:application-two" /> Overview</li>
          <li className="sidebarListItem "> <Icon icon="material-symbols:savings-rounded" /> Savings</li>
          <li className="sidebarListItem "> <Icon icon="ion:wallet" /> Wallets</li>
          <li className="sidebarListItem "> <Icon icon="icon-park:add-user" />  Refferal</li>
          <li className="sidebarListItem "><Icon icon="pajamas:profile" /> Profile</li>
          <li className="sidebarListItem "><Icon icon="material-symbols:settings-rounded" />  Settings</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebars;
