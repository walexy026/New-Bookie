import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 const AddFunds =() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add funds</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Fill the following details</p>
            <p>Funds deposited are non refundable until it reach its target goal </p>
            <label htmlFor="Amount ">Amount </label>
            <input type="number" name="" id="" placeholder='NGN 14,000' />
           
            
            </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose}>
          Proceed
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFunds;