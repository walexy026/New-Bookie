import React from 'react'
import './Refferal.css'
import { Table } from 'react-bootstrap';

const Refferal = () => {
  return (
    <div className='refferal'>
        <h4>Referral  Bonus</h4>
 <Table striped bordered hover size className='referralTable'>
      <thead>
        <tr >
          <th>Name </th>
          <th>Amount</th>
          <th>Date </th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Adewale Ayuba</td>
          <td>NGN 1,000</td>
          <td>Nov8,2023</td>
         
        </tr>
        <tr>
          <td>Adewale Ayuba</td>
          <td>NGN 1,000</td>
          <td>Nov8,2023</td>
        </tr>
      </tbody>
    </Table>

    </div>
  )
}

export default Refferal