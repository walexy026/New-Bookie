import React from "react";
import "./RecentTransactions.css";
import {Table} from 'react-bootstrap';
import Refferal from "../Refferal/Refferal";

const RecentTransactions = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}> {type} </button>;
  };
  return (
    <div>
      <div className="widgetLg">
        <span className="widgetLgTitle">
        <h3 >Recent Transaction</h3>
        <p>View All</p>
        </span>
        <Table striped bordered hover className="widgetLgTable">
      <thead>
        <tr className="widgetLgTable">
        <th className="widgetLgTh">Name </th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Date </th>
            <th className="widgetLgTh">Status </th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td className="widgetLgUser">
              <span className="widgetLgName">Mobile Transfer </span>
              <span className="widgetSmName">Added to my funds</span>
            </td>
            <td className="widgetLgDate">NGN 450,00 </td>
            <td className="widgetLgAmount">Nov 8,2023</td>
            <td className="widgetLgStatus">
              <Button type="Deposit" />
            </td>
        </tr>
        <tr>
        <td className="widgetLgUser">
              <span className="widgetLgName">Mobile Transfer </span>
              <span className="widgetSmName">Added to my funds</span>
            </td>
            <td className="widgetLgDate">12 May 2022</td>
            <td className="widgetLgAmount">$1202.00</td>
            <td className="widgetLgStatus">
              <Button type="Withdrawal" />
            </td>
        </tr>
        <tr>
        <td className="widgetLgUser">
              <span className="widgetLgName">Mobile Transfer </span>
              <span className="widgetSmName">Added to my funds</span>
            </td>
            <td className="widgetLgDate">12 May 2022</td>
            <td className="widgetLgAmount">$1202.00</td>
            <td className="widgetLgStatus">
              <Button type="Withdrawal" />
            </td>
        </tr>
      </tbody>
    </Table>
    </div>
      <Refferal/>
    </div>



    //     <Table striped bordered hover size="sm" className="widgetLgTable">
    //       <tr className="widgetLgTr">
    //         <th className="widgetLgTh">Name </th>
    //         <th className="widgetLgTh">Amount</th>
    //         <th className="widgetLgTh">Date </th>
    //         <th className="widgetLgTh">Status </th>
    //       </tr>
    //       <tr className="widgetLgTr">
    //         <td className="widgetLgUser">
    //           <span className="widgetLgName">Mobile Transfer </span>
    //           <span className="widgetSmName">Added to my funds</span>
    //         </td>
    //         <td className="widgetLgDate">NGN 450,00 </td>
    //         <td className="widgetLgAmount">Nov8,2023</td>
    //         <td className="widgetLgStatus">
    //           <Button type="Deposit" />
    //         </td>
    //       </tr>
    //       <tr className="widgetLgTr">
    //         <td className="widgetLgUser">
    //           <span className="widgetLgName">Mobile Transfer </span>
    //           <span className="widgetSmName">Added to my funds</span>
    //         </td>
    //         <td className="widgetLgDate">12 May 2022</td>
    //         <td className="widgetLgAmount">$1202.00</td>
    //         <td className="widgetLgStatus">
    //           <Button type="Withdrawal" />
    //         </td>
    //       </tr>
    //       <tr className="widgetLgTr">
    //         <td className="widgetLgUser">
    //           <span className="widgetLgName">Mobile Transfer </span>
    //           <span className="widgetSmName">Added to my funds</span>
    //         </td>
    //         <td className="widgetLgDate">12 May 2022</td>
    //         <td className="widgetLgAmount">$1202.00</td>
    //         <td className="widgetLgStatus">
    //           <Button type="Withdrawal" />
    //         </td>
    //       </tr>
    //     </Table>
    //   </div>
    //   <Refferal/>
    // </div>
  );
};

export default RecentTransactions;
