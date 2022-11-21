import React from "react";
import "./SavingsGoal.css";

const SavingsGoal = () => {
  return (
    <div className="savingWrapper">
        <h4>New Goal</h4>
      <div className="savingGoal">
        <div class="row g-5 w-100">
          <div class="col">
            <label for="Goal Name" class="form-label">
              Goal Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="My Grandma House"
              aria-label="My Grandma House"
            ></input>
          </div>
          <div class="col">
            <label for="Start Date" class="form-label">
              Start Date
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="09/09/2002"
              aria-label="09/09/2002"
            ></input>
          </div>
        </div>
        <div class="row g-5 w-100">
          <div class="col">
            <label for="Amount" class="form-label">
              Amount
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="NGN 120, 000"
              aria-label="NGN 120, 000"
            ></input>
          </div>
          <div class="col">
            <label for="End Date" class="form-label">
              End Date
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="09/09/2002"
              aria-label="09/09/2002"
            ></input>
          </div>
        </div>
        <div class="row g-5 w-100">
          <div class="col">
            <label for="Monthly Savings " class="form-label">
              Monthly Savings{" "}
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="NGN 120, 000"
              aria-label="NGN 120, 000"
            ></input>
          </div>
          <div class="col">
            <label for="Payment Method " class="form-label">
              Payment Method{" "}
            </label>

            <select id="inputState" class="form-select">
              <option selected>Mastercard </option>
              <option>Visa</option>
              <option>Verve</option>
            </select>
          </div>
          <div class="col-12 savingsBtn">
            <button type="submit" class="savingsbtnSubmit">
              Fund Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsGoal;
