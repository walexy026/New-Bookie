import React, { Fragment } from "react";
import "./Settings.css";
import { BsChevronRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
// import Settings from '../Settings/index'
// import AccountSettings from "../AccountSettings/AccountSettings";
import {Link } from 'react-router-dom'

const Settings = () => {
const settingsList = {
  icon:'',
  title:'',
  subtitle:'',
  

}


  return (
    <Fragment>
      <div className="settingsPanel">
        <h5>Settings</h5>
        </div>

      <div className="settingsWrapper">
        <div className="settings">
          <div className="settingsSideBar">
            <ul>
            <Link to={"/settings/accountsettings"}>  <li className="listsettings"> 
               <Icon
                  icon="icon-park:me"
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                />
                <div className="acctsetts" style={{ marginRight: "3rem" }}>
                  <b> Account settings </b>
                  <b id="pi">Personal information, Notification</b> 
                </div>
                <BsChevronRight />
                
              </li></Link>
          <Link to ={'/settings/securitysettings'}><li className="listsettings">
                <Icon
                  icon="mdi:security-lock-outline"
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                />
                <div className="acctsetts" style={{ marginRight: "0.1rem" }}>
                  <b>Security</b>
                  <b id="pi">Change password ,Authemtication Number</b>
                </div>
                <BsChevronRight />
              </li></Link>
              <li className="listsettings">
                <Icon
                  icon="icon-park:me"
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                />
                <div className="acctsetts " style={{ marginRight: "3rem" }}>
                  <b>Appearances</b>
                  <b id="pi">Dark and Light Mode , Front Size </b>
                </div>
                <BsChevronRight />
              </li>
              <li className="listsettings">
                <Icon
                  icon="icon-park:me"
                  style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                />{" "}
                <div className="acctsetts" style={{ marginRight: "3rem" }}>
                  <b>Appearances</b>
                  <b id="pi">Dark and Light Mode , Front Size </b>{" "}
                </div>
                <div>
                  <BsChevronRight />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <AccountSettings /> */}
        {/* <Settings/> */}
      </div>
    </Fragment>
  );
};

export default Settings;
