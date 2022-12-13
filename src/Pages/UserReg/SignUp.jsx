import React,{useState} from "react";
import "./UserReg.css";
import Logo from "../../Assets/bookieLogo.svg";
import Useform from "./useForm";
import {BsEye,BsEyeSlash } from 'react-icons/bs'
import {Link} from 'react-router-dom'


const SignUp = () => {
  

  const { handleChange, handleSubmit, values, errors } = Useform();
  const [showPassword, setShowPassword] =useState(false)

  return (
    <div className="signUpContainer">
      <>
        <form onSubmit={handleSubmit} className="user-info-form">
          <span className="logoDiv">
            <img src={Logo} alt="Logo" />
            <h4>Bookie</h4>{" "}
          </span>
          <h5>Sign up </h5>
          <p>Secure an acoount with Bookie</p>
          <div>
            
            <label className='labelSignup' htmlFor="email">Email</label >
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              className="pwdInput"
            />
            {errors.email ? <span className="err"> {errors.email}</span> : null}

            <label className='labelSignup' htmlFor="phone-input">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              className="pwdInput"
            />
            {errors.phoneNumber && <span className="err"> {errors.phoneNumber}</span>}

            <label className="labelSignup" htmlFor="password">
              Enter Password
            </label>
            <div className="pswrdDiv">
            <input
              name="password"
              type={showPassword ? 'text': "password"}
              id="password"
              // ref={pwdRef}
              className="pwdInput"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              />
             <span className="showHideIcon" onClick={()=>setShowPassword(!showPassword)}>{showPassword? <BsEye/>:<BsEyeSlash/>} </span>
              </div>
            {errors.password ? <span className="err"> {errors.password}</span> : null}

            <div className="btnsignUpCON">
              <button className="btnSignUp">Proceed</button>
            </div>
            <p>
              By signing up you agree to Bookie Term of use and Privacy Policy
            </p>
            <p>
              Already have an account. <Link className="linkk" to ='/login'>Login</Link> 
            </p>
          </div>
        </form>
      </>
    </div>
  );
};

export default SignUp;
