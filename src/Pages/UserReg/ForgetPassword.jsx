import React, { useState } from "react";
import "./UserReg.css";
import Logo from "../../Assets/bookieLogo.svg";
import axios  from "axios";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };

  const  doRequestPassword = async (e) => {
    e.prevent.default();
    setEmail(email)
    axios
      .post("https://bookie-app.onrender.com/api/user/forgotPass", email)
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
      })
      .catch(function (error) {
        console.error(error.response.data); // NOTE - use "error.response.data` (not "error")
      });
  };
  
  return (
    <div className="signUpContainer">
      <form onSubmit={doRequestPassword} className="user-info-form" >
        <span className="logoDiv">
          <img src={Logo} alt="Logo" />
          <h4>Bookie</h4>{" "}
        </span>
        <h5>Forget Password </h5>
        <p>Enter your email to reset your Password</p>
        <div>
          <label className="labelSignup" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            className="pwdInput"
            required
          />
          {/* {errors.email && <span> {errors.email}</span>} */}

          <div className="btnsignUpCON">
            <button className="btnSignUp">Reset Password </button>
          </div>
          <Link to="/login">Back to Login</Link>
        </div>
      </form>
    </div>
  );
};
export default ForgetPassword;
