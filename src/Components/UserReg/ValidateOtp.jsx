import React from "react";
import "./UserReg.css";
import Logo from "../../Assets/bookieLogo.svg";
import ReactOtpInput from "./ReactOtpInput";
import { useState } from "react";

 const ValidateOtp = () => {

  const [otp, setOtp] = useState("");

const handleChange = (enteredOtp) => {
  setOtp(enteredOtp);
  // console.log(enteredOtp);
  
};
const handleSubmit = (value) =>{

  console.log((value))
}

  return (
    <div className="otpDiv">
      <span className="logoDiv">
        <img src={Logo} alt="Logo" />
        <h4>Bookie</h4>{" "}
      </span>
      <div>
        <h5>Verification Code </h5>
        <p>Enter the verification Code sent to your phone </p>

        <form className="otp" action="" onSubmit={handleSubmit} >
          <ReactOtpInput onSubmit={handleSubmit}  onChange={handleChange} />
          <button className="otpsubmit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default ValidateOtp;
