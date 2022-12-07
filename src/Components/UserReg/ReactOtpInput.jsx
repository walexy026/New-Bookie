import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import Logo from "../../Assets/bookieLogo.svg";

export default function ReactOtpInput() {
  const [otp, setOtp] = useState("");

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    console.log(enteredOtp);
    // alert("what is happening");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp)
  };
  return (
    <div className="otpDiv">
      <span className="logoDiv">
        <img src={Logo} alt="Logo" />
        <h4>Bookie</h4>
      </span>
      <div>
        <h5>Verification Code </h5>
        <p>Enter the verification Code sent to your phone </p>

        <form className="otp" action="" onSubmit={handleSubmit}>
          <OtpInput
            value={otp}
            onChange={handleChange}
            onSubmit={true}
            numInputs={4}
            separator={<span> </span>}
            inputStyle={"otpinput"}
            isInputNum={true}
          />
          <button className="otpsubmit">Login</button>
        </form>
      </div>
    </div>
  );
}
