import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import "./Modals.css";

const Deposit = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="modalHead">
            <h5>Deposit</h5>
            <GrFormClose onClick={onClose} className="closeModal" />
          </div>
          <div className="modalBody check">
            <BsCheckCircleFill fontSize="8rem" color=" #17A17C" />
            <h4>Funds Added Sucessfully</h4>
          </div>
          <div className='btnModalDiv'>
          <button className="btnmodal"> Back to Dashboard</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
