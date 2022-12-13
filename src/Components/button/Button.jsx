import React from 'react'
import './Button.css'

export default function Button() {
  return (
    <section className="button">
     <div className='book-section-heading'>Books</div>
            <div className='book-button-container'>
            <button className='book-section-btn'>Recommended</button>
            <button className='book-section-btn'>Nursery-School </button>
            <button className='book-section-btn'>Primary-School </button>
            <button className='book-section-btn'>Junior-Secondary</button>
            <button className='book-section-btn'>Senior-Secondary</button>
            </div>
        </section>
  )
}
