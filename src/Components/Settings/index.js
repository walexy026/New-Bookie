import { Routes, Route } from "react-router-dom";
import Settings from "./Settings";
import AccountSettings from '../AccountSettings/AccountSettings'
import SecuritySettings from '../SecuritySettings/SecuritySettings'
const index = () => {
    const HelloWolrd=()=>(
        <h1>Hello world</h1>
    )
  return (
    <Routes>
      <Route path="/" element={<Settings />} />
      <Route path="/helloworld" element={<HelloWolrd />} />
      <Route path='/accountsettings' element={<AccountSettings/>}/> 
      <Route path='/securitysettings' element={<SecuritySettings/>}/> 
      
    </Routes>
  );
};

export default index;
