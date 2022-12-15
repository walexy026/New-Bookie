import React from 'react'
import ReactStars from "react-rating-stars-component";

const StarRating = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
   
  return (
    <div>
   
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