import React from "react";
import './Dashboard.css'
import { FeaturedInfo } from "../../Components/FeaturedInfo/FeaturedInfo";
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
import Sidebars from "../../Components/Sidebars/Sidebars";
import UpperPanel from "../../Components/UpperPanel/UpperPanel";
import SavingsGoal from "../../Components/Savings/SavingsGoal";
import Wallet from "../../Components/Wallet/Wallet";
import Profiles from "../../Components/Profiles/Profiles";

const Dashboard = () => {
  return (
    <div className="dashboard">
    <UpperPanel/>
      <div className="dashboardSegment">
      <Sidebars />
      <div>
      <FeaturedInfo />
      <RecentTransactions/>
      </div>
      </div>
      <SavingsGoal/>
      <Wallet/>
      <Profiles/>
    </div>
  );
};

export default Dashboard;
