import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import Logo from "../../Assets/bookieLogo.svg";
import { useNavigate } from "react-router-dom";
import axios  from "axios";

//       function Login() {
// return (
//   <div>
{
  /* <LoginForm
        onSubmit={() => {
          navigate('/user/dashboard');
        }}
      />
    </div>
  );
} */
}

export default function ReactOtpInput() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
    console.log(enteredOtp);
    // alert("what is happening");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
      // console.log(otp) ? 1111 : navigate("/Wallet");
    
  };

  const resendOtp = (e) =>{
   e.preventDefault()
   axios.post('https://bookie-app.onrender.com/api/user/resendOtp/638a0548f57ef927065b662e').then((response) => {
    console.log(response);
    
    console.log(response.data.token);
  })
  .catch (function (error) {
    console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
  });
  }


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
          <button className="resendotp"onSubmit={resendOtp} >Resend Otp</button>
      </div>
    </div>
  );
}
