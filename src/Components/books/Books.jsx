import React , {useEffect, useState} from 'react'
// import data from './bookData'
import './Book.css'
import StarRating from './StarRating';


const url = 'https://bookie-app.onrender.com/api/books'

export default function Books() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
    };
    useEffect(()=> {
        getData();
    }, [])

 
    
    return (
        <section className="book-section">
            <div className="book-card-container">
                {data.map(({id,bookName,price,bookImage,bookPublisher,categories}) => {
                    return (
                        <div className="bookImage-container" >
                            <img src= {bookImage}alt="" className="book-items" key={id} />
                            <div className="book-section-title-container">
                                <h2 className="book-section-title">
                                    {bookName}
                                    
                                </h2>
    
                                <div className="description-price-container">
                                    <p className="book-description">{categories}</p>
                                    <p className='book-price-description'>{price}</p>
                                </div>
                                <div className='description-price-container'>
                                <h4 className='book-description'>{bookPublisher}</h4>
                                <div>
                                    <StarRating />
                               
                               </div>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>
        </section>
    )

}
                    
                    
           