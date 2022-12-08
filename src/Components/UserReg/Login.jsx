import React, { useState } from "react";
import "./UserReg.css";
import Logo from "../../Assets/bookieLogo.svg";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => {
    console.log({ data });
  };
  const handleValidate = (value) => {
    const isValid = isValidPhoneNumber(value);
    console.log({ isValid });
    return isValid;
  };
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  return (
    <div className="signUpContainer">
      <> 
        <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
        <span className="logoDiv">
          <img src={Logo} alt="Logo" />
          <h4>Bookie</h4> {" "}
        </span>
        <h5>Login</h5>
        <p>Welcome  Back </p>
          <div>
            <label htmlFor="phone-input">Phone Number</label>
            <Controller
              name="phone-input"
              control={control}
              rules={{
                validate: (value) => handleValidate(value),
              }}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  value={value}
                  onChange={onChange}
                  defaultCountry="NG"
                  id="phone-input"
                />
              )}
            />
            {errors["phone-input"] && (
              <p className="error-message">Invalid Phone</p>
            )}
            <label className='labelSignup' htmlFor="password">Enter Password </label>
            <input
              type="password"
              id="password"
              className="pwdInput"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
             <p
            id="pwdnote"
            className={
              pwdFocus && !validPwd
                ? "instructions"
                : "offscreen"
            }
          ></p>
          <label htmlFor="">
          <input type="checkbox" name="" id="" />
          Remember Me
          </label>
<div className="btnsignUpCON">
            <button className="btnSignUp">Proceed</button>
</div>
            <p>
              By signing up you agree to Bookie Term of use and Privacy Policy{" "}
            </p>
            <p>
              Already have an account. <a href="">Login</a>{" "}
            </p>
          </div>
        </form>
      </>
    </div>
  );
};

export default SignUp;
