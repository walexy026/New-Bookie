import React from "react";
import "./SavingsGoal.css";
import { GrFormClose } from "react-icons/gr";

const SavingsGoal = ({open, onClose}) => {
  if (!open) return null
  return (
    <div onClick={onClose} className="overlay">
    <div  onClick={(e) => {
            e.stopPropagation();
          }} className="savingWrapper modalContainer">
      <h4>New Goal</h4>
     
            <GrFormClose onClick={onClose} className="closeModal" />
      <div className="savingGoal">
      
        <form className="inputProfileform">
          <div className="inputDiv">
            <div>
              <label className="savingsLabel" htmlFor="GoalName">
                Goal Name
              </label>
              <input
                className="inputField"
                type="text"
                name="GoalName"
                id=""
                placeholder="My Grandma House "
              />
            </div>
            <div>
              <label className="savingsLabel" htmlFor="StartDate">
                Start Date
              </label>

              <input
                type="date"
                className="inputField"
                name="Start Date"
                id=""
                placeholder="0541714416"
              />
            </div>
          </div>
          <div className="inputDiv">
            <div>
              <label className="savingsLabel" htmlFor="Amount">
                Amount
              </label>
              <input
                type="Amount"
                className="inputField"
                name="Amount"
                id=""
                placeholder="NGN 120, 000"
              />
            </div>
            <div>
              <label className="savingsLabel" htmlFor=" End Date ">
                {" "}
                End Date{" "}
              </label>
              <input
                type="date"
                className="inputField"
                name="End Date"
                id=""
                placeholder="Guaranty Trust Bank"
              />
            </div>
          </div>
          <div className="inputDiv">
            <div>
              <label className="savingsLabel" htmlFor="MonthlySavings ">
                Monthly Savings{" "}
              </label>
              <input
                type="tel"
                className="inputField"
                name="Monthly Savings "
                id=""
                placeholder="NGN 120, 000"
              />
            </div>
            <div>
              <label className="savingsLabel" htmlFor="AccountName">
                Account Name
              </label>
              <select id="inputState" className="inputField">
                <option selected>Mastercard </option>
                <option>Visa</option>
                <option>Verve</option>
              </select>
            </div>
          </div>

          <div className="savingsBtn">
            <button type="submit" className="savingsbtnSubmit">
              Fund Goal
            </button>
          </div>
        </form>
      </div>
     </div>
    </div>
  );
};

export default SavingsGoal;
