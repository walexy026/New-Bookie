import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BooksPage from './BooksPage';
import Buybooks from './buy-books/Buybooks';
import Landingpage from './Landingpage';
import Savemoneypage from './savemoneypage/Savemoneypage';
import Savings from "./Components/Savings/Savings";
import UpperPanel from "./Components/UpperPanel/UpperPanel";
import Sidebars from "./Components/Sidebars/Sidebars";
import Settings from "./Components/Settings";
import Wallet from "./Components/Wallet/Wallet";
import Refferal from "./Components/Refferal/Refferal";
import Profiles from "./Components/Profiles/Profiles";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Overview from "./Components/Overview/Overview";
import SignUp from "./Components/UserReg/SignUp";
import SettingsLayout from "./layout/SettingsLayout";
import ReactOtpInput from "./Components/UserReg/ReactOtpInput";
function App() {
  return (
    <BrowserRouter>
    <Routes>
				<Route
					path='/'
					element={<Landingpage />}
				/>
				<Route
					exact
					path='allbooks'
					element={<BooksPage />}
				/>

				<Route
					exact
					path='savemoney'
					element={<Savemoneypage />}
				/>
				<Route
					exact
					path='buybooks'
					element={<Buybooks />}
				/>
			</Routes>
      <main className="dashboard">
        <UpperPanel />
        <div className="dashboardSegment">
          <Sidebars />
          <div className="fillup">
            <Routes>
              <Route path="/" element={<Overview />} />
              {/* <Route path="/Dashboard" element={<Dashboard />} /> */}

              <Route path="/Savings" element={<Savings />} />
              <Route element={<SettingsLayout />}>
                <Route path="/settings/*" element={<Settings />} />
              </Route>
              <Route path="/Profiles" element={<Profiles />} />
              <Route path="/Refferal" element={<Refferal />} />
              <Route path="/Wallet" element={<Wallet />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/otp" element={<ReactOtpInput />} />
              
            </Routes>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
  }
export default App;
