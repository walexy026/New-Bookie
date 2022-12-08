import React from "react";
import './Dashboard.css'
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
import Sidebars from "../../Components/Sidebars/Sidebars";
import UpperPanel from "../../Components/UpperPanel/UpperPanel";



const Dashboard = () => {
  return (
   
    
    <div className="dashboard">
    <UpperPanel/>
      <div className="dashboardSegment">
      <Sidebars />
      <div>
      <RecentTransactions/>
      </div>
      </div> 
    
    
    </div>
    
  );
};

export default Dashboard;
