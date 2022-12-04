import React, {useState} from "react";
import { FeaturedInfo } from "../FeaturedInfo/FeaturedInfo";
import ProgressBar from "./ProgressBar";
import SavingsGoal from "./SavingsGoal";
import './SavingsGoal.css'

const Savings = () => {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div>
        <FeaturedInfo/>
      <div className="savingsContainer">
        <div className="savingsheader">

        <h6>Here are your savings Goal </h6>   
      <button onClick={()=>setOpenModal(true)} className="createGoal">Create a new Goal</button>    
      <SavingsGoal open={openModal} onClose={()=> setOpenModal(false)}/>
        </div>
        <table className='ta' >
          <thead>
           <td colSpan='2' className="toptable"><b >My kids School Fees</b> <hr /></td>
          </thead>
          <tr className="tableRow">
              <td className="tdRightAlign">
                <div className="firstRow"> NGN 100,000</div>
                <span>
                  <ProgressBar progress={75} />
                </span>
              </td>
              <td className="tdLeftalign">
                <div>NGN 150,000</div> <div className="smallFont">GOAL AMOUNT</div>
              </td>
              <hr />
            </tr>
          <tr className="tableRow">
            <td className="tdRightAlign"> <div> START DATE</div> <div> 30th July, 2022</div></td>
            <td className="tdLeftalign"><div className="startDateGreen"> NGN 70,000</div> <div>MONTHLY</div></td>
          </tr>
          <tr className="tableRow">
            <td className="tdRightAlign"><div> NEXT WITHDRAWAL</div> <div>30th July, 2022 </div></td>
            <td className="tdLeftalign"> <button className="active">Active </button></td>
          </tr>
          <tr className="tableRow">
            <td className="tdRightAlign"> <div> PAYMENT METHOD </div><div> Mastercard-0568 </div></td>
            <td className="tdLeftalign smallFont">  Flexible Savings</td>
          </tr>
          <tr className="tableRow">
            <td className="tdRightAlign"> <button className="fundGoal">Fund Goal</button></td>
            <td className="tdLeftalign"><button className="liquidate">Liquidate</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Savings;
