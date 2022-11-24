import React from "react";
import "./InputProfile.css";

const InputProfile = () => {

  return (
    <div>
      <form className="inputProfileform">
        <div className="inputDiv">
          <div>
            <label className="profileLabel" htmlFor="FullName">Full Name</label>
            <input className="inputField" type="text" name="FullName" id="" placeholder="Adedoyin" />
          </div>
          <div>
            <label className="profileLabel" htmlFor="AccountNumber">Account Number</label>
            <input
              type="text"
              className="inputField"
              name="AccountNumber"
              id=""
              placeholder="0541714416"
            />
          </div>
        </div>
        <div className="inputDiv">
          <div>
            <label className="profileLabel" htmlFor="Email">Email</label>
            <input
              type="email"
              className="inputField"
              name="Email"
              id=""
              placeholder="adedoyin@gmail.com"
            />
          </div>
          <div>
            <label className="profileLabel" htmlFor=" BankName "> Bank Name </label>
            <input
              type="text"
              className="inputField"
              name="BankName"
              id=""
              placeholder="Guaranty Trust Bank"
            />
          </div>
        </div>
        <div className="inputDiv">
          <div>
            <label className="profileLabel" htmlFor="PhoneNumber">Phone Number</label>
            <input
              type="tel"
              className="inputField"
              name="PhoneNumber"
              id=""
              placeholder="09060481979"
            />
          </div>
          <div>
            <label className="profileLabel" htmlFor="AccountName">Account Name</label>
            <input
              type="text"
              className="inputField"
              name="AccountName"
              id=""
              placeholder="Ogunbo Adedoyin"
            />
          </div>
        </div>
        <div className="inputDiv">
          <div>
            <label className="profileLabel" htmlFor="DateOfBirth">Date Of Birth</label>
            <input
              type="datetime"
              className="inputField"
              name="DateOfBirth"
              id=""
              placeholder="09/09/2023"
            />
          </div>
          <div>
            <label className="profileLabel" htmlFor="BVN">BVN</label>
            <input type="text" className="inputField" name="BVN" id="" placeholder="12366839397675" />
          </div>
        </div>
        <div className="profileRadio">
          <b>Gender</b>
          <label  htmlFor="Female ">Female </label>
          <input type="radio" name="Gender" id="" value='Female'/>
          <label htmlFor="Male ">Male </label>
          <input type="radio" name="Gender" id="" value='Male' />
        </div>
        <div className="profileBtn">
          <button type="submit" className="profilebtnSubmit">
            Save
          </button>
        </div>
      </form>


    </div>
  );
};

export default InputProfile;
