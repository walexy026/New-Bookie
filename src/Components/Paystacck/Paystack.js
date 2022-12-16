import React from 'react'

const Paystack = () => {
  return (
    <div>
<div className="App">
  <div className="container">
    <div className="item">
      <div className="overlay-effect"></div>
      <img
        className="item-image"
        src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt="product"
      />
      <div className="item-details">
        <p className="item-details__title">Coconut Oil</p>
        <p className="item-details__amount">NGN{amount / 100}</p>
      </div>
    </div>
    <div className="checkout">
      <div className="checkout-form">
        <div className="checkout-field">
          <label>Name</label>
          <input/>
        </div>
        <div className="checkout-field">
          <label>Email</label>
          <input/>
        </div>
        <div className="checkout-field">
          <label>Phone</label>
          <input/>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Paystack