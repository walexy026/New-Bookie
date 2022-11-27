import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BsCheckCircleFill} from 'react-icons/bs'

 const Withdrawal =() => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Withdrawal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Withdrawal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <BsCheckCircleFill fontSize="8rem" />
            <p>Withdrawal Succesful</p>
            </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>
          Back to Dashboard
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Withdrawal;