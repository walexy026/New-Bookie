import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";

const StarRating = () => {
const [rating, setRating] = useState('')

const ratingChanged = (e) =>{
setRating(rating)
console.log(e)
}  

// const ratingChanged = (newRating) => {
//         // console.log(newRating);
      
//       };
   
  return (
    <div>
   {rating}
    <div>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    />
    </div>
    </div>
  )
}

export default StarRating