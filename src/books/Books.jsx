// import React , {useEffect, useState} from 'react'
import { BsStarFill } from "react-icons/bs"
import data from './bookData'
import './Book.css'




export default function Books() {
 
    
    return (
        <section className="book-section">
            <div className="book-card-container">
                {data.map(({id,imgUrl,price,title,description}) => {
                    return (
                        <div className="bookImage-container" >
                            <img src= {imgUrl}alt="" className="book-items" key={id} />
                            <div className="book-section-title-container">
                                <h2 className="book-section-title">
                                    {title}
                                    
                                </h2>
                                <div className="description-price-container">
                                    <p className="book-description">{description}</p>
                                    <p className='book-price-description'>{price}</p>
                                </div>
                                <BsStarFill className='star-icon'/>
                                <BsStarFill className='star-icon'/>
                                <BsStarFill className='star-icon'/>
                                <BsStarFill className='star-icon'/>
                                <BsStarFill className='star-icon'/>
                            </div>
                        </div>
                    )

                })}
            </div>
        </section>
    )

}
                    
                    
           