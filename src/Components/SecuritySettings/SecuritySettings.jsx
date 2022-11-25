import React from 'react'
import './SecuritySettings.css'

const SecuritySettings = () => {
  return (
      <div>SecuritySettings
        <h5>Security Setting </h5>
<div>
    <h5>Reset Password </h5>
    <b>This consist your personal information and other details</b>
<form action="">
    <div>

    <label htmlFor="PhoneNumber">Phone Number</label>
    <input type="tel" name="PhoneNumber" id="" />

    <label htmlFor="NewPassword ">New Password </label>
    <input type="password" name="NewPassword " id="" />

    </div>
    <div>

    <label htmlFor="OldPassword ">Old Password </label>
    <input type="password" name="OldPassword " id="" />

    <label htmlFor="Re-enter New Password ">Re-enter New Password </label>
    <input type="password" name="" id="" />
    </div>

    <hr />

    <div>
        <h5>Two factor auntication Number</h5>
        <b>An Aunthentication Code is send to this user mobile Number</b>
        <p>Enter Code</p>

        <hr />

        <button type="reset">Discard Changes </button>
        <button type="submit">Save Changes </button>
    </div>
</form>

</div>

    </div>
  )
}

export default SecuritySettings