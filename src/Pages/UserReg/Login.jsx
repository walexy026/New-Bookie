import React from "react";
import "./UserReg.css";
import Logo from "../../Assets/bookieLogo.svg";
import loginForm from "./loginForm";

const SignUp = () => {
  const { handleChange, handleSubmit, values, errors } = loginForm();

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
            {errors.phoneNumber && <span> {errors.phoneNumber}</span>}

            <label className="labelSignup" htmlFor="password">
              Enter Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              // ref={pwdRef}
              className="pwdInput"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password ? <span> {errors.password}</span> : null}

            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Remember Me
            </label>
            <div className="btnsignUpCON">
              <button className="btnSignUp">Proceed</button>
            </div>
            <p>
            Don't have a Bookie account. <a href="">Sign Up</a>{" "}
            </p>
          </div>
        </form>
      </>
    </div>
  );
};

export default SignUp;
