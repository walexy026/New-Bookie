import React, {useState} from 'react'
import { PaystackButton } from 'react-paystack'


const PaystackAcct = () => {
    const publicKey = "pk_your_public_key_here"
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
<div className="checkout-form">
  <div className="checkout-field">
    <label>Name</label>
    <input
      type="text"
      id="name"
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Email</label>
    <input
      type="text"
      id="email"
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="checkout-field">
    <label>Phone</label>
    <input
      type="text"
      id="phone"
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
  <PaystackButton className="paystack-button" {...componentProps} />
</div>
    </div>
  )
}

export default PaystackAcct