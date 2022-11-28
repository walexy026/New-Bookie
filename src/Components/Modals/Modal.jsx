import React, { useState } from "react";
import AddFunds from "./AddFunds";
import Deposit from "./Deposit";
import Withdrawal from "./Withdrawal";
import WithdrawalForm from "./WithdrawalForm";

const Modal = () => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div>
      Modal
      <button onClick={()=>setOpenModal(true)}>Open Modal</button>
      <AddFunds open={openModal} onClose={()=> setOpenModal(false)}/>
      <Deposit open={openModal} onClose={()=> setOpenModal(false)}/>
      <Withdrawal open={openModal} onClose={()=> setOpenModal(false)}/>
      <WithdrawalForm  open={openModal} onClose={()=> setOpenModal(false)}/>
    </div>
  );
};

export default Modal;
