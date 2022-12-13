import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import Logo from "../../Assets/bookieLogo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function ReactOtpInput() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const userId = localStorage.getItem("createdId");

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    console.log(enteredOtp);
    // alert("what is happening");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const request = {
      otp,
      userId,
    };
    axios
      .post("https://bookie-app.onrender.com/api/user/otp", request)
      .then((response) => {
        console.log(response);
        if (response?.data?.type === "success") {
          navigate("/login");
        }
        // if ( ) {

        // }
      })
      // make axios post with otp and the createdId
      // navigate to login page
      .catch(function (error) {
        console.error(error.response.data);
      });
  };

  //For resend OTP
  const resendOtp = (e) => {
    e.preventDefault();

    axios
      .post(`https://bookie-app.onrender.com/api/user/resendOtp/${userId}` )
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error.response.data);
      });
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
        <button className="resendotp" onClick={resendOtp}>
          Resend Otp
        </button>
      </div>
    </div>
  );
}
