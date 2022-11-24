import React from 'react'
import './Refferal.css'
import { Table } from 'react-bootstrap';
import CopyClipboard from './CopyClipboard';

const Refferal = () => {
  return (
    <div className='refferalWrapper'>
<div className='referralCodeDiv'>
  <div className=''>
    <h4>Refferal </h4>
    <h6>Refferal someone and  get  NGN 1000   into your Wallet</h6>
  </div>
  <div className=''>
    <h4>Refferal Code</h4>
    <CopyClipboard/>
  </div>
  <div>
    <h4>Referral Bonus</h4>
    <input type="text" name="" id="" value='NGN 6,000' />
  </div>
</div>
    <div className='refferal'>
        <h4>Referral  Bonus</h4>
     <Table className='referralTable'>
      <thead>
        <tr >
          <th className="widgetLgTh">Name </th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Date </th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="widgetLgDate">Adewale Ayuba</td>
          <td className="widgetLgDate">NGN 1,000</td>
          <td className="widgetLgDate">Nov8,2023</td>
         
        </tr>
        <tr>
          <td className="widgetLgDate">Adewale Ayuba</td>
          <td className="widgetLgDate">NGN 1,000</td>
          <td className="widgetLgDate">Nov8,2023</td>
        </tr>
        <tr>
          <td className="widgetLgDate">Adewale Ayuba</td>
          <td className="widgetLgDate">NGN 1,000</td>
          <td className="widgetLgDate">Nov8,2023</td>
        </tr>
        <tr>
          <td className="widgetLgDate">Adewale Ayuba</td>
          <td className="widgetLgDate">NGN 1,000</td>
          <td className="widgetLgDate">Nov8,2023</td>
        </tr>
        <tr>
          <td className="widgetLgDate">Adewale Ayuba</td>
          <td className="widgetLgDate">NGN 1,000</td>
          <td className="widgetLgDate">Nov8,2023</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Refferal