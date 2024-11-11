import React from 'react'

import checkedStar from '../assets/images/review_star-checked.svg'
import uncheckedStar from '../assets/images/review_star-unchecked.svg'

function StarRating({ starRating }) {
    const maxStars = 5;
    const checkedStars = Math.min(starRating, maxStars);
    const uncheckedStars = maxStars - checkedStars;
    

  return (
    <div className="review_stars" >
    {          
        [...Array(checkedStars)].map((_, index) => (<img key={index} src={checkedStar} alt="Checked star." />))
    }
    {
        [...Array(uncheckedStars)].map((_, index) => (<img key={index} src={uncheckedStar} alt="Unchecked star." />))
    }
    </div>
  )
}

export default StarRating
