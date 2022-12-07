import React from "react";
import "./UserReg.css";
import Logo from "../../Assets/bookieLogo.svg";
import ReactOtpInput from "./ReactOtpInput";


const ValidateOtp = () => {
  return (
    <div className="otpDiv">
      <span className="logoDiv" >
        <img src={Logo} alt="Logo" />
        <h4>Bookie</h4>{" "}
      </span>
      <div >
        <h5>Verification Code </h5>
        <p>Enter the verification Code sent to your phone </p>
      <ReactOtpInput/>
      <button className="otpsubmit">Login</button>
      </div>
    </div>
  );
};

export default ValidateOtp;
