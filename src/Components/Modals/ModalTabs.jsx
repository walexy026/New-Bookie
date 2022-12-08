import React, {useState} from "react";
import "./Modals.css";
import { GrFormClose } from "react-icons/gr";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ModalTabs = ({ open, onClose }) => {
    const [tabIndex, setTabIndex] = useState(0);
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer modalOtp"
        >
          <div className="modalHead">
            <h5>Add Funds</h5>
            <GrFormClose onClick={onClose} className="closeModal" />
          </div>
          <div className="modalBody ">
            <h5>Select Payment Method </h5>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Paypal</Tab>
        <Tab>Apple Pay</Tab>
        <Tab>Apple Pay</Tab>
      </TabList>
      <TabPanel> 
        <div>
         <label htmlFor="Card Number">Card Number </label>
            <input className="modalInput" type="text" name="" id="" />
            <label htmlFor="Card Holder Name ">Card Holder Name </label>
            <input className="modalInput" type="text" name="" id="" />
        </div>
        <div className="modalCVV">
            <span>
            <label htmlFor="Expiry Date">Expiry Date</label>
            <input  className="modalInput cvv"type="text" name="" id="" />
            </span>
            <span>
            <label htmlFor="CVV">CVV</label>
            <input  className="modalInput cvv" type="text" name="" id="" />
            </span>
        </div>
      <label htmlFor="">  <input type="checkbox" name="" id="" />  Save Bank  Details</label>
            </TabPanel>
      <TabPanel>VFVVFVFV</TabPanel>
      <TabPanel>VFVVFVFV</TabPanel>
    </Tabs>
          </div>
          <div className="btnModalDiv">
            <button className="btnmodal">Add Funds</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalTabs;
