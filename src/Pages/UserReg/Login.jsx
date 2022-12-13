import React, { useState } from "react";
import "./UserReg.css";
import Logo from "../../Assets/bookieLogo.svg";
import loginForm from "./loginForm";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { handleChange, handleSubmit, values, errors } = loginForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signUpContainer">
      <>
        <form onSubmit={handleSubmit} className="user-info-form">
          <span className="logoDiv">
            <img src={Logo} alt="Logo" />
            <h4>Bookie</h4>{" "}
          </span>
          <h5>Login</h5>
          <p>Welcome Back </p>
          <div>
            <label className="labelSignup" htmlFor="phone-input">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              className="pwdInput"
            />
            {errors.phoneNumber && (
              <span className="err"> {errors.phoneNumber}</span>
            )}

            <label className="labelSignup" htmlFor="password">
              Enter Password
            </label>

            <div className="pswrdDiv">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                className="pwdInput"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
              />
              <span
                className="showHideIcon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BsEye /> : <BsEyeSlash />}{" "}
              </span>
            </div>
            {errors.password ? (
              <span className="err"> {errors.password}</span>
            ) : null}

            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Remember Me
            </label>
            <div className="btnsignUpCON">
              <button className="btnSignUp">Proceed</button>
            </div>
            <p>
              Don't have a Bookie account. <Link className="linkk" to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </>
    </div>
  );
};

export default SignUp;
