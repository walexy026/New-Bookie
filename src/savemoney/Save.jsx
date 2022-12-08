import React from 'react'
import Savings from '../assets/save-money-image.svg';
import Family from '../assets/family-section-image.svg'
import readMore from '../assets/read-more.svg'
import './Save.css'


export default function Save() {
  return (
    <section className="save-money-section">
        <h3 className="save-money-heading">
            The Service We Provide 
        </h3>
        <div className="save-money-container">
            <div className="img-container">
                <img src={Savings} alt="savings" className="savings-img" />
            </div>
            <div className="left-container">
            <h3 className="container-heading">Save Money</h3>
            <p className="container-para">You can have a  saving wallets with Bookie</p>
            <button className="save-section-btn">Learn more <img src={readMore} alt="read" className='readmore' /></button>
            </div>
        </div>
        <div className="save-money-container reverse">
            <div className="left-container">
            <h3 className="container-heading">Buy Books</h3>
            <p className="container-para">You can have a  saving wallets with Bookie</p>
            <button className="save-section-btn">Learn more <img src={readMore} alt="read" className='readmore' /></button>
            </div>
            <div className="img-container">
                <img src={Family} alt="savings" className="savings-img" />
            </div>
        </div>
    </section>
  )
}
