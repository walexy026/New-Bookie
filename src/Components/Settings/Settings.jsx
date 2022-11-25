import React from "react";
import "./Settings.css";
import { BsChevronRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
import AccountSettings from "../AccountSettings/AccountSettings";
import SecuritySettings from "../SecuritySettings/SecuritySettings";
const Settings = () => {
  return (
    <div className='settings'>
      Settings
        <AccountSettings/>
        <SecuritySettings/>
      <div className="settingsSideBar">
        <ul>
          <li className="listsettings">
            <Icon icon="icon-park:me" style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
            <div className="acctsetts" style={{ marginRight: '3rem' }}>
              <b> Account settings </b>
              <b id="pi">Personal information, Notification</b>
            </div>
            <BsChevronRight />
          </li>
          <li className="listsettings">
            <Icon icon="mdi:security-lock-outline" style={{ fontSize: '2rem', marginRight: '0.5rem' }}/>
            <div className="acctsetts" style={{ marginRight: '0.1rem' }}>
              <b>Security</b>
              <b id="pi">Change password ,Authemtication Number</b>
            </div>
            <BsChevronRight />
          </li>
          <li className="listsettings">
            <Icon icon="icon-park:me" style={{ fontSize: '2rem', marginRight: '0.5rem' }} />
            <div className="acctsetts " style={{ marginRight: '3rem' }} >
              <b>Appearances</b>
              <b id="pi">Dark and Light Mode , Front Size </b>
            </div>
            <BsChevronRight />
          </li>
          <li className="listsettings">
            <Icon icon="icon-park:me" style={{ fontSize: '2rem', marginRight: '0.5rem' }} />{" "}
            <div className="acctsetts" style={{ marginRight: '3rem' }}>
              <b>Appaerances</b>
              <b id="pi">Dark and Light Mode , Front Size </b>{" "}
            </div>
            <div>
              <BsChevronRight />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
