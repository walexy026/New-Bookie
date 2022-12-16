import React from 'react'
import heroImg from '../../Assets/hero-fine-image.svg'
import './Hero-section.css'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-section">
        <div className="hero-section-right-container">
            <h2 className="hero-section-heading">
                Save Money and Buy Books for Your Kids  
            </h2>
            <p className="hero-section-para">
               Let us help you out. Save and Buy Books  our website 
            </p>
          <Link to='signup'>
            <button className='hero-section-btn'>Get Started </button>
          </Link>

        </div>
        <div className="hero-section-left-container">
            <img src={heroImg} alt="heroImg" className="hero-section-img" />
        </div>
    </section>
  )
}
