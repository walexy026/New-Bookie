import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


 const WithdrawalForm =() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      WithdrawalForm
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Fill the following details</p>
            <label htmlFor="Bank Name ">Bank Name </label>
            <input type="text" name="" id="" />
            <label htmlFor="Account Number">Account Number</label>
            <input type="text" name="" id="" />
            <label htmlFor="Account Name">Account Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="Amount">Amount</label>
            <input type="text" name="" id="" />
            <p>Only Target savings can be withdrawal</p>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Withdraw
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Cancel Transaction
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WithdrawalForm;