import React from "react";
import { FeaturedInfo } from "../../Components/FeaturedInfo/FeaturedInfo";
import Sidebars from "../../Components/Sidebars/Sidebars";
import UpperPanel from "../../Components/UpperPanel/UpperPanel";

const Dashboard = () => {
  return (
    <div>
      <UpperPanel/>
      <FeaturedInfo />
      <Sidebars />
    </div>
  );
};

export default Dashboard;
