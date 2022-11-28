import React from 'react';
import './Modals.css'
import { GrFormClose } from "react-icons/gr";



 const WithdrawalForm =({open, onClose}) => {
  if (!open) return null

  return (
    <>
     <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer wtdform"
        >
          <div className="modalHead">
            <h5> Withdrawal</h5>
            <GrFormClose onClick={onClose} className="closeModal" />
          </div>
          <div className="modalBody ">
          <p>Fill the following details</p>
          
            <label htmlFor="Bank Name ">Bank Name </label>
            <input className="modalInput" type="text" name="" id="" />
            <label htmlFor="Account Number">Account Number</label>
            <input className="modalInput" type="text" name="" id="" />
            <label htmlFor="Account Name">Account Name</label>
            <input  className="modalInput"type="text" name="" id="" />
            <label htmlFor="Amount">Amount</label>
            <input  className="modalInput" type="text" name="" id="" />
            <p>Only Target savings can be withdrawal</p>
          </div>
          <div className='btnModalDiv btnModalFlex'>
          <button className="btnmodalW btnModalGreen"> Withdraw</button>
          <button className="btnmodalW btnModalBrown">  Cancel Transaction</button>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default WithdrawalForm;