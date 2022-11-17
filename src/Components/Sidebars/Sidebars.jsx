import React from "react";
import "./Sidebars.css";
import { Icon } from '@iconify/react';
import bookieLogo from '../../Assets/bookieLogo.svg'

const Sidebars = () => {
  return (
    <div>
      Sidebars
      <div className="sidebar">
      
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <ul className="sidebarList">
        <span className="sidebarLogo"> <img src={bookieLogo} alt="bookieLogo" /> Bookie</span>
          <li className="sidebarListItem active"><Icon icon="icon-park:application-two" fontSize='1.5rem' style={{marginRight:'1.5rem'}}  /> Overview</li>
          <li className="sidebarListItem "> <Icon icon="material-symbols:savings-rounded" fontSize='1.5rem' style={{marginRight:'1.5rem'}} /> Savings</li>
          <li className="sidebarListItem "> <Icon icon="ion:wallet" fontSize='1.5rem'  style={{marginRight:'1.5rem'}}/> Wallets</li>
          <li className="sidebarListItem "> <Icon icon="icon-park:add-user" fontSize='1.5rem' style={{marginRight:'1.5rem'}} />  Refferal</li>
          <li className="sidebarListItem "><Icon icon="pajamas:profile" fontSize='1.5rem' style={{marginRight:'1.5rem'}}/> Profile</li>
          <li className="sidebarListItem "><Icon icon="material-symbols:settings-rounded" fontSize='1.5rem' style={{marginRight:'1.5rem'}} />  Settings</li>
          <li className="sidebarListItem LogOut"><Icon icon="icon-park:logout" fontSize='1.5rem' backgroundColor="#fff"  style={{marginRight:'1.5rem', color:'#fff'}} /> Log out</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebars;
