import React, { useContext, useState }  from 'react'
import { ReviewContext } from '../contexts/ReviewContext'

import checkedStar from '../assets/images/review_star-checked.svg'
import uncheckedStar from '../assets/images/review_star-unchecked.svg'
import comma from '../assets/images/review_comma.svg'


function HomeReviewItem() {
    const { reviews, loading, error } = useContext (ReviewContext);

    
    const [reviewStars, setReviewStars] = useState();
    
    const [checkedStars, setCheckedStars] = useState();
    const [uncheckedStars, setUncheckedStars] = useState();
    

    const checked = () => {
        let stars = reviews.starRating;
        for (i = 0; i <= stars; i++ ) {
            li.appendChild(document.createTextNode('hej'));
            ulList.appendChild(li);
            console.log(stars)
        }
    }
    console.log(checkedStars)


    return (
        <>
        {reviews.slice(0,2).map((review) => (
            <div className='review' key={review.id}>
                {loading}
                {error}
                <div className="review_comma">
                    <img src={comma} alt="quotation marks" />
                </div>
                <div className="review_stars">
                    <ul id='ulList'>
                        {checked}{uncheckedStars}
                    </ul>
                <p>{review.starRating}</p>
                </div>
                <p>{review.comment}</p>

                <div className="review_avatar">
                <img src={review.avatarUrl} alt="Picture of user" />
                    <div>
                        <h6>{review.author}</h6>
                        <p>{review.jobRole}</p>
                    </div>
                </div>
            </div>
        ))}
        </>
  )
}

export default HomeReviewItem
