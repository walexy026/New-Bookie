import React, { Fragment } from "react";
import "./Settings.css";
import { BsChevronRight } from "react-icons/bs";
import { Icon } from "@iconify/react";
import { Link, Outlet } from "react-router-dom";
import UpperPanel from "../UpperPanel/UpperPanel";
// , NavLink  to be used later
const Settings = () => {
  // const SettingList =[
  //    {
  //   id:1,
  //   icon:<Icon
  //   icon="icon-park:me"
  //   style={{ fontSize: "2rem", marginRight: "0.5rem" }}
  // />,
  //   title:' Account settings',
  //   subtitle:'Personal information, Notification',
  //   iconright:<BsChevronRight />,
  //   link:"/settings/accountsettings"

  // },
  //    {
  //   id:2,
  //   icon: <Icon
  //   icon="mdi:security-lock-outline"
  //   style= {{ fontSize: "2rem", marginRight: "0.5rem" }}
  // />,
  //   title:'Security',
  //   subtitle:'Change password ,Authemtication Number',
  //   iconright: <BsChevronRight />,
  //   link:'/settings/securitysettings'
  // },
  //    {
  //   id:3,
  //   icon:<Icon
  //   icon="icon-park:me"
  //   style={{ fontSize: "2rem", marginRight: "0.5rem" }}
  // />,
  //   title:'Appearances',
  //   subtitle:'Dark and Light Mode , Front Size',
  //   iconright: <BsChevronRight />,
  //   link:'/settings/securitysettings'
  // },
  //    {
  //   id:4,
  //   icon:<Icon
  //   icon="icon-park:me"
  //   style={{ fontSize: "2rem", marginRight: "0.5rem" }}
  // />,
  //   title:'Appearances',
  //   subtitle:'Dark and Light Mode , Front Size',
  //   iconright: <BsChevronRight />,
  //   link:'/settings/securitysettings'
  // }
  // ]
  // console.log(SettingList)

  return (
    <div>
      <UpperPanel />
      <Fragment>
        <div className="settingsWrapper">
          <div className="settingsPanel">
            <h5>Settings</h5>
            <div className="settings">
              <div className="settingsSideBar">
                <ul>
                  {/* {SettingList.map (item=>{
            <NavLink key={item.id} to={item.link}>  <li className="listsettings"> 
            {item.icon}
            <div className="acctsetts" style={{ marginRight: "3rem" }}>
            <b> {item.title} </b>
                  <b id="pi">{item.subtitle}</b> 
                  </div>
                  {item.iconright}              
                  </li></NavLink>
                })} */}

                  <Link to={"/dashboard/settings"}>
                    {" "}
                    <li className="listsettings">
                      <Icon
                        icon="icon-park:me"
                        style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                      />
                      <div
                        className="acctsetts"
                        style={{ marginRight: "3rem" }}
                      >
                        <b className="acctfont"> Account settings </b>
                        <b id="pi">Personal information, Notification</b>
                      </div>
                      <BsChevronRight />
                    </li>
                  </Link>
                  <Link to={"/dashboard/settings/securitySettings"}>
                    <li className="listsettings">
                      <Icon
                        icon="mdi:security-lock-outline"
                        style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                      />
                      <div
                        className="acctsetts"
                        style={{ marginRight: "0.1rem" }}
                      >
                        <b className="acctfont">Security</b>
                        <b id="pi">Change password ,Authemtication Number</b>
                      </div>
                      <BsChevronRight />
                    </li>
                  </Link>
                  <li className="listsettings">
                    <Icon
                      icon="icon-park:me"
                      style={{ fontSize: "2rem", marginRight: "0.5rem" }}
                    />
                    <div className="acctsetts " style={{ marginRight: "3rem" }}>
                      <b className="acctfont">Appearances</b>
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
                      <b className="acctfont">Appearances</b>
                      <b id="pi">Dark and Light Mode , Front Size </b>{" "}
                    </div>
                    <div>
                      <BsChevronRight />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </Fragment>
    </div>
  );
};

export default Settings;
