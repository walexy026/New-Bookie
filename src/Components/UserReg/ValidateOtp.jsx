import React, { useState } from "react";
import "./UserReg.css";
import OtpInput from "react18-input-otp";




 const ValidateOtp = () => {

  const [otp, setOtp] = useState("");

const handleChange = (enteredOtp) => {
  setOtp(enteredOtp);
  // console.log(enteredOtp);
  
};



  return (
    <div>
     
        <form className="otp" action=""  >
        <OtpInput
            value={otp}
            onChange={handleChange}
            onSubmit={true}
            numInputs={4}
            separator={<span> </span>}
            inputStyle={"otpinput"}
            isInputNum={true}
          />
          
        </form>
      </div>
    
  );
};

export default ValidateOtp;
