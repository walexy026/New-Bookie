import React from 'react'
import SubscribeImg from '../../Assets/bg-image.png'
import './Subscribe.css'
export default function Subscribe() {
  return (
    <section className='subscribe-section'>
      <div className="subscribe-main-container">
        <div className="subscribe-image">
          <img src= {SubscribeImg} alt="img" className='bg-subcribe-image' />
        </div>
        <div className="subscribe-container">
          <h3 className="subscribe-heading"> New to <span className="blue-bookie">Bookie</span></h3> 
          <b className="subscribe-paragraph">
            Subscribe to our newsletter to get updates on our lattest offers.
          </b>
          <div className='subscriberInput'>
      <label htmlFor="email"></label>
          <input type="email"  placeholder= " Enter Email" name="email" id='subscribe-input'/>
          <button type="submit" className='subscribe-button'>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  )
}
