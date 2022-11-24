import React from "react";
import "./SavingsGoal.css";

const SavingsGoal = () => {
  return (
    <div className="savingWrapper">
      <h4>New Goal</h4>
      <div className="savingGoal">
        <form className="inputProfileform">
          <div className="inputDiv">
            <div>
              <label className="profileLabel" htmlFor="GoalName">
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
              <label className="profileLabel" htmlFor="StartDate">
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
              <label className="profileLabel" htmlFor="Amount">
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
              <label className="profileLabel" htmlFor=" End Date ">
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
              <label className="profileLabel" htmlFor="MonthlySavings ">
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
              <label className="profileLabel" htmlFor="AccountName">
                Account Name
              </label>
              <select id="inputState" className="inputField">
                <option selected>Mastercard </option>
                <option>Visa</option>
                <option>Verve</option>
              </select>
            </div>
          </div>

          <div className="profileBtn">
            <button type="submit" className="profilebtnSubmit">
              Fund Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SavingsGoal;
