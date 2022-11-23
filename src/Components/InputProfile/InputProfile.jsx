import React from "react";
import "./InputProfile.css";

const InputProfile = () => {
  return (
    <div>
      InputProfile
      <form className="inputProfileform">
        <div className="part">
          <div>
            <label htmlFor="FullName">Full Name</label>
            <input type="text" name="FullName" id="" placeholder="Adedoyin" />
          </div>
          <div>
            <label htmlFor="AccountNumber">Account Number</label>
            <input
              type="text"
              name="AccountNumber"
              id=""
              placeholder="0541714416"
            />
          </div>
        </div>
        <div className="part">
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              id=""
              placeholder="adedoyin@gmail.com"
            />
          </div>
          <div>
            <label htmlFor=" BankName "> Bank Name </label>
            <input
              type="text"
              name="BankName"
              id=""
              placeholder="Guaranty Trust Bank"
            />
          </div>
        </div>
        <div className="part">
          <div>
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input
              type="tel"
              name="PhoneNumber"
              id=""
              placeholder="09060481979"
            />
          </div>
          <div>
            <label htmlFor="AccountName">Account Name</label>
            <input
              type="text"
              name="AccountName"
              id=""
              placeholder="Ogunbo Adedoyin"
            />
          </div>
        </div>
        <div className="part">
          <div>
            <label htmlFor="DateOfBirth">Date Of Birth</label>
            <input
              type="datetime"
              name="DateOfBirth"
              id=""
              placeholder="09/09/2023"
            />
          </div>
          <div>
            <label htmlFor="BVN">BVN</label>
            <input type="text" name="BVN" id="" placeholder="12366839397675" />
          </div>
        </div>
        <div className="profileRadio">
          <label htmlFor="Female ">Female </label>
          <input type="radio" name="" id="" />
          <label htmlFor="Male ">Male </label>
          <input type="radio" name="" id="" />
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
