import React from "react";
import './Dashboard.css'
import { FeaturedInfo } from "../../Components/FeaturedInfo/FeaturedInfo";
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
import Sidebars from "../../Components/Sidebars/Sidebars";
import UpperPanel from "../../Components/UpperPanel/UpperPanel";
import SavingsGoal from "../../Components/Savings/SavingsGoal";
import Refferal from "../../Components/Refferal/Refferal";
import Profiles from "../../Components/Profiles/Profiles";
import Settings from "../../Components/Settings/Settings";
import AddFunds from "../../Components/Modals/AddFunds";
import Deposit from "../../Components/Modals/Deposit";
import Withdrawal from "../../Components/Modals/Withdrawal";
import WithdrawalForm from "../../Components/Modals/WithdrawalForm";

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
      <Profiles/>
      <Refferal/>
      <Settings/>
      <AddFunds/>
      <Deposit/>
      <Withdrawal/>
      <WithdrawalForm/>
    </div>
  );
};

export default Dashboard;
