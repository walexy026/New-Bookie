import React from "react";
import "./Sidebars.css";
import { Icon } from '@iconify/react';
import bookieLogo from '../../Assets/bookieLogo.svg'
import {FiLogOut} from 'react-icons/fi'
import {BiUserPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'


const Sidebars = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <ul className="sidebarList">
        <span className="sidebarLogo"> <img src={bookieLogo} alt="bookieLogo" /> Bookie</span>
          <li className="sidebarListItem active"><Link to='/'>  <Icon icon="icon-park:application-two" fontSize='1.5rem' style={{marginRight:'1.5rem'}}/> Overview </Link></li>
          <li className="sidebarListItem n"><Link to='/savings'> <Icon icon="material-symbols:savings-rounded" fontSize='1.5rem' 
          style={{marginRight:'1.5rem'}} /> Savings </Link>
 </li>
          <li className="sidebarListItem "><Link to='/wallet' >  <Icon icon="ion:wallet" fontSize='1.5rem'  style={{marginRight:'1.5rem'}}/> Wallets</Link> </li>
          <li className="sidebarListItem "><Link to='/Refferal'>  <BiUserPlus fontSize='1.5rem' style={{marginRight:'1.5rem'}}/> Refferal </Link> </li>
          <li className="sidebarListItem "><Link to='/Profiles'> <Icon icon="pajamas:profile" fontSize='1.5rem' style={{marginRight:'1.5rem'}}/> Profile </Link> </li>
          <li className="sidebarListItem "><Link to='/Settings'> <Icon icon="material-symbols:settings-rounded" fontSize='1.5rem' style={{marginRight:'1.5rem'}} />  Settings </Link> </li>
          <li className="sidebarListItem LogOut"> <FiLogOut fontSize='1.5rem' style={{marginRight:'1.0rem'}}/> Log out </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebars;
