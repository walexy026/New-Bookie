import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "./Pages/AllBooks/BooksPage";
import Buybooks from "./Pages/buy-books/Buybooks";
import Landingpage from "./Pages/LandingPage/Landingpage";
import Savemoneypage from "./Pages/savemoneypage/Savemoneypage";
import Savings from "./Components/Savings/Savings";
import AccountSettings from './Components/AccountSettings/AccountSettings'
import SecuritySettings from './Components/SecuritySettings/SecuritySettings'
import Sidebars from "./Components/Sidebars/Sidebars";
import Wallet from "./Components/Wallet/Wallet";
import Refferal from "./Components/Refferal/Refferal";
import Profiles from "./Components/Profiles/Profiles";
// import Dashboard from "./Pages/Dashboard/Dashboard";
import Overview from "./Components/Overview/Overview";
import SignUp from "./Pages/UserReg/SignUp";
import Login from "./Pages/UserReg/Login";
import ForgetPassword from "./Pages/UserReg/ForgetPassword";
// import SettingsLayout from "./layout/SettingsLayout";
import ReactOtpInput from "./Pages/UserReg/ReactOtpInput";
import Settings from "./Components/Settings/Settings";
// import DashboardLayout from "./layout/DashboardLayout";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route exact path="/allbooks" element={<BooksPage />} />
        <Route exact path="/savemoney" element={<Savemoneypage />} />
        <Route exact path="/buybooks" element={<Buybooks />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/otp" element={<ReactOtpInput />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Sidebars />}>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/Savings" element={<Savings />} />
          <Route path="/dashboard/Profiles" element={<Profiles />} />
          <Route path="/dashboard/Refferal" element={<Refferal />} />
          <Route path="/dashboard/Wallet" element={<Wallet />} />
          <Route path="/dashboard/settings" element={<Settings />}>
            <Route path="/dashboard/settings/" element={<AccountSettings/>} />
            <Route path="/dashboard/settings/securitysettings" element={<SecuritySettings/>} />
          </Route>
        </Route>

        {/* <div className="dashboard"> */}
        {/* <UpperPanel /> */}
        {/* <div className="dashboardSegment"> */}
        {/* <div className="fillup"> */}
        {/* <Sidebars /> */}
        {/* <Routes> */}
        {/* <Route path="/ii" element={<Overview />} /> */}
        {/* 
              <Route element = {<DashboardLayout/>} >
                <Route path = "/dashboard/*" element= {<Sidebars/>}/>
              </Route> */}

        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

        {/*             
              <Route element={<SettingsLayout />}>
                <Route path="/settings/*" element={<Settings />} />
              </Route>
             
            </Routes> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </Routes>
    </div>
  );
}
export default App;
