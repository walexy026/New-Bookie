import React, {useState} from 'react'
import { PaystackButton } from 'react-paystack'
import './Paystack.css'
import logo from '../../Assets/logo.svg'

const PaystackAcct = () => {
    const publicKey = "pk_test_b24efa220e2fb3286cb82c4125ccedda5ff4d624"
    const amount = 1000000 // Remember, set in kobo!
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! Don't leave :("),
      }

  return (
    <div>
<div className="paystackinfo">
      <div className="container">
        <div className="item">
          <img src={logo}  />
          <div className="item-details">
            <p className='item-details__title'>Dancing Shoes</p>
            <p className='item-details__amount'>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form className='checkout-form'>
            <label className='checkout-field'  label>Name</label>
            <input
             className='checkout-field'
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label className='checkout-field'>Email</label>
            <input
             className='checkout-field'
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='checkout-field'>Phone</label>
            <input 
            className='checkout-field'
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton className='paystack-button' {...componentProps} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default PaystackAcct