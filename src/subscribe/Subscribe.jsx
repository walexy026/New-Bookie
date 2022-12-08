import React from 'react'
import SubscribeImg from '../assets/bg-image.png'
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
          <p className="subscribe-paragraph">
            Subscribe to our newsletter to get updates on our lattest offers.
          </p>
          <input type="email"  placeholder= " Enter Email" name="email" id='subscribe-input'/>
          <button type="submit" className='subscribe-button'>Subscribe</button>
        </div>
      </div>
    </section>
  )
}
