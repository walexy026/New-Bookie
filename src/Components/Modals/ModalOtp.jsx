import React from 'react'
import { GrFormClose } from "react-icons/gr";
import './Modals.css'

const ModalOtp = ({open, onClose}) => {
    if (!open) return null
  return (  <>
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalHead">
          <h5> Withdrawal</h5>
          <GrFormClose onClick={onClose} className="closeModal" />
        </div>
        <div className="modalBody check">
         <b>Enter the One Time Password (OTP)  sent to  your Phone Number</b>
         <div className="modOTP">
              <input className="authtoken" type="text" />
              <input className="authtoken" type="text" />
              <input className="authtoken" type="text" />
              <input className="authtoken" type="text" />
            </div>
        <b >Resend Code?</b>
        </div>
        <div className='btnModalDiv'>
        <button className="btnmodal"> Proceed</button>
        </div>
      </div>
    </div>
  </>

  )
}

export default ModalOtp