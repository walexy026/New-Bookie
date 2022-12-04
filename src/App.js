import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Savings from "./Components/Savings/Savings";
import UpperPanel from "./Components/UpperPanel/UpperPanel";
import Sidebars from "./Components/Sidebars/Sidebars";
import Settings from "./Components/Settings/Settings";
import Wallet from './Components/Wallet/Wallet'
import Refferal from "./Components/Refferal/Refferal";
import Profiles from './Components/Profiles/Profiles'
import Dashboard from './Pages/Dashboard/Dashboard'
import Overview from "./Components/Overview/Overview";
function App() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <UpperPanel />
        <div className="dashboardSegment">
          <Sidebars />
          <div className="fillup">
            <Routes>
              <Route path="/" element={<Overview />} />
              {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

              <Route path="/Savings" element={<Savings />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Profiles" element={<Profiles />} />
              <Route path="/Refferal" element={<Refferal />} />
              <Route path="/Wallet" element={<Wallet />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
