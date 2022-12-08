import React from "react";
import ValidateOtp from "../UserReg/ValidateOtp";
import "./SecuritySettings.css";

const SecuritySettings = () => {
  return (
    <div className="securitySettings">
      <h5>Security Setting </h5>
      <div>
        <h5>Reset Password </h5>
        <b>This consist your personal information and other details</b>
        <form action="">
          <div className="securityform">
            <div>
              <label htmlFor="PhoneNumber">Phone Number</label>
              <input
                className="securityinput"
                type="tel"
                name="PhoneNumber"
                id=""
              />
            </div>
            <div>
              <label htmlFor="NewPassword ">New Password </label>
              <input
                className="securityinput"
                type="password"
                name="NewPassword "
                id=""
              />
            </div>
          </div>
          <div className="securityform">
            <div>
              <label htmlFor="OldPassword ">Old Password </label>
              <input
                className="securityinput"
                type="password"
                name="OldPassword "
                id=""
              />
            </div>
            <div>
              <label htmlFor="Re-enter New Password ">
                Re-enter New Password{" "}
              </label>
              <input className="securityinput" type="password" name="" id="" />
            </div>
          </div>

          <hr />

          <div className="twoFacauth">
            <h5>Two factor Aunthentication Number</h5>
            <b>An Aunthentication Code is send to this user mobile Number</b>
            <p>Enter Code</p>
            <hr />
            <div className="authtokendiv">
              <ValidateOtp/>
            </div>
            <div className="accbtn">
              <button className="btndiscard" type="reset">
                Discard Changes{" "}
              </button>
              <button className="btnsub" type="submit">
                Save Changes{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SecuritySettings;
