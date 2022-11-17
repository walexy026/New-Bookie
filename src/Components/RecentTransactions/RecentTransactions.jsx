import React from 'react'
import './RecentTransactions.css'

const RecentTransactions = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}> {type} </button>;
      };
  return (
    <div>
<div className="widgetLg">
      <h3 className="widgetLgTitle">Recent Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Name </th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Date </th>
          <th className="widgetLgTh">Status </th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <span className="widgetLgName">Mobile Transfer </span>
            <span className='widgetSmName'>Added to my funds</span>
          </td>
          <td className="widgetLgDate">NGN 450,00 </td>
          <td className="widgetLgAmount">Nov8,2023</td>
          <td className="widgetLgStatus">
            <Button type="Deposit" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <span className="widgetLgName">Mobile Transfer </span>
            <span className='widgetSmName'>Added to my funds</span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Withdrawal" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <span className="widgetLgName">Mobile Transfer </span>
            <span className='widgetSmName'>Added to my funds</span>
          </td>
          <td className="widgetLgDate">12 May 2022</td>
          <td className="widgetLgAmount">$1202.00</td>
          <td className="widgetLgStatus">
            <Button type="Withdrawal" />
          </td>
        </tr>
        </table>
    </div>

    </div>
  )
}

export default RecentTransactions