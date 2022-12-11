import React from "react";
import './Dashboard.css'
// import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
// import Sidebars from "../../Components/Sidebars/Sidebars";
import Overview from "../../Components/Overview/Overview";
// import UpperPanel from "../../Components/UpperPanel/UpperPanel";



const Dashboard = () => {
  return (
   
    
    <div className="dashboard">
  
    
     <div className="dashboardSegment"> 
      {/* <Sidebars /> */}
      <Overview/>
      </div>
      {/* </div>  */}
    
    
    </div>
    
  );
};

export default Dashboard;
