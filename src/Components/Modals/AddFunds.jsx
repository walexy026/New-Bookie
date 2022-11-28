// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import './Modals.css'

//  const AddFunds =() => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//       AddFunds
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title className='te' > Add funds</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <p>Fill the following details</p>
//             <p>Funds deposited are non refundable until it reach its target goal </p>
//             <label htmlFor="Amount ">Amount </label>
//             <input type="number" name="" id="" placeholder='NGN 14,000' />

//             </Modal.Body>
//         <Modal.Footer>
//           {/* <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button> */}
//           <Button variant="primary" onClick={handleClose}>
//           Proceed
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default AddFunds;

import React from "react";
import "./Modals.css";
import { GrFormClose } from "react-icons/gr";

const AddFunds = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalHead">
          <h5>Add Funds</h5>
          <GrFormClose onClick={onClose} className="closeModal" />
        </div>
        <div className="modalBody">
          <b>Fill the following details</b>
          <p>
            Funds deposited are non refundable until it reach its target goal{" "}
          </p>
          <div>
            <label htmlFor="Amount ">Amount </label>
            <input
              className="modalInput"
              type="text"
              name="Amount "
              id=""
              placeholder="NGN 14,000"
            />
          </div>
          <div className="btnModalDiv">
            <button className="btnmodal">Proceed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFunds;
