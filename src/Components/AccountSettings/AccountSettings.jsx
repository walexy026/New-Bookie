import React from "react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="AccountSettings">
      <h5>Account Setting </h5>
      <div>
        <h5>Personal Information</h5>
        <p>This consist your personal information and other details</p>
        <form action="">
          <div  className="acctform">
            <div>
              <label className="la" htmlFor="FullName">Full Name</label>
              <input className="acctInput" type="text" name="FullName" id="" />
            </div>
            <div>
              <label className="la"  htmlFor="Email">Email</label>
              <input className="acctInput" type="email" name="Email" id="" />
            </div>
          </div>

          <div>
            <label className="la" htmlFor="PhoneNumber">Phone Number</label>
            <input className="acctInput" type="tel" name="PhoneNumber" id="" />
          </div>
          <br />
          <hr className="hb" />

          <div>
            <h5>Notifications</h5>
            <p>Choose type of notification you want to recieve</p>
            <div className="acctcheckbox">
              <div>
                <label className="la" htmlFor="">
                  <input type="checkbox" name="" id="" value="" />Withdrawal
                  Activity
                </label>
                <label className="la" htmlFor="">
                  <input type="checkbox" name="" id="" value="" />
                  Weekly Report
                </label>
                <label className="la" htmlFor="">
                  <input type="checkbox" name="" id="" value="" /> Payment
                  Success
                </label>
              </div>
              <div>
                <label className="la" htmlFor="">
                  <input type="checkbox" name="" id="" value="" /> Password
                  Change
                </label>
                <label className="la" htmlFor="">
                  <input type="checkbox" name="" id="" value="" />
                  Top Up Success
                </label>
                <label className="la" htmlFor="">
                  <input type="checkbox" name="" id="" value="" /> Send Money
                  Success
                </label>
              </div>
            </div>
          </div>
          <hr  className="hb"/>
<div className="accbtn">

          <button className='btndiscard'  type="reset">Discard Changes </button>

          <button className='btnsub' type="submit">Save Changes </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
