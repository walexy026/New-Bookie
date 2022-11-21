import React from 'react'
import './Profiles.css'

const Profiles = () => {
  return (
    <div>
    <div className="profileWrapper">
      <h4>Profile</h4>
      <div className="profileGoal">
        <div class="row g-5 w-100">
          <div class="col">
            <label for="Full Name" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Adedoyin"
              aria-label="Adedoyin"
            ></input>
          </div>
          <div class="col">
            <label for="Account Number" class="form-label">
              Account Number
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="0541714416"
              aria-label="0541714416"
            ></input>
          </div>
        </div>
        <div class="row g-5 w-100">
          <div class="col">
            <label for="Email" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="adedoyin@gmail.com"
              aria-label="adedoyin@gmail.com"
            ></input>
          </div>
          <div class="col">
            <label for=" Bank Name " class="form-label">
              Bank Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Guaranty Trust Bank"
              aria-label="Guaranty Trust Bank"
            ></input>
          </div>
        </div>
        <div class="row g-5 w-100">
          <div class="col">
            <label for="Phone Number" class="form-label">
              Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="09060481979"
              aria-label="09060481979"
            ></input>
          </div>
          <div class="col">
            <label for="Account Name " class="form-label">
              Account Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="**********************"
              aria-label="**********************"
            ></input>
          </div>
        </div>
        <div class="row g-5 w-100">
          <div class="col">
            <label for="Date Of Birth" class="form-label">
            Date Of Birth
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="09/09/2023"
              aria-label="09/09/2023"
            ></input>
          </div>
          <div class="col">
            <label for="BVN" class="form-label">
            BVN
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="**********************"
              aria-label="**********************"
            ></input>
          </div>
        </div>
        <div class="col-12 profileBtn">
          <button type="submit" class="profilebtnSubmit">
          Save 
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profiles