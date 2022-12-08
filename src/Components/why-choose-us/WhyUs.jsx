import React from 'react'
import Easy from '../../Assets/easy-icon.svg'
import Secure from '../../Assets/secure-icon.svg'
import Flexible from '../../Assets/flexible-icon.svg'
import './WhyUs.css'

export default function WhyUs() {
  return (
    <section className="why-choose-us-component">
        <div className="why-choose-us-container">
            <img src={Easy} alt="" className="easy-icon" />
            <div className="easy-content">
                <h2 className="easy-heading">
                Easy
            </h2>
            <p className="easy-para">
                Bookie as a website which is easy to use to save your savings 
            </p>
                </div>
        </div>
        <div className="why-choose-us-container">
            <img src={Flexible} alt="" className="easy-icon" />
            <div className="easy-content">
            <h2 className="easy-heading">
                Flexible
            </h2>
            <p className="easy-para">
                Bookie as a website which is easy to use to save your savings 
            </p>
            </div>
        </div>
        <div className="why-choose-us-container">
            <img src={Secure} alt="" className="easy-icon" />
            <div className="easy-content">
            <h2 className="easy-heading">
               Secure
            </h2>
            <p className="easy-para">
                Bookie as a website which is easy to use to save your savings 
            </p>
                </div>
        </div>
    </section>
  )
}
