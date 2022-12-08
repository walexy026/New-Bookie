import { Routes, Route } from "react-router-dom";
import AccountSettings from '../AccountSettings/AccountSettings'
import SecuritySettings from '../SecuritySettings/SecuritySettings'
import Settings from "./Settings";
const index = () => {
   
  return (
    <div style={{display:'flex'}} >
      {/* <Route path="/" element={<Settings />} /> */}
    <Routes>
      <Route path='/accountsettings' element={<AccountSettings/>}/> 
      <Route path='/securitysettings' element={<SecuritySettings/>}/> 
      
    </Routes>
    </div>
  );
};

export default index;
