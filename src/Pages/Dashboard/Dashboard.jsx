import React from "react";
import { FeaturedInfo } from "../../Components/FeaturedInfo/FeaturedInfo";
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
import Sidebars from "../../Components/Sidebars/Sidebars";
import UpperPanel from "../../Components/UpperPanel/UpperPanel";

const Dashboard = () => {
  return (
    <div>
      <UpperPanel/>
      <FeaturedInfo />
      <Sidebars />
      <RecentTransactions/>
    </div>
  );
};

export default Dashboard;
