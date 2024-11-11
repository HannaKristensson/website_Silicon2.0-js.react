import React, { useContext}  from 'react'
import { ReviewContext } from '../contexts/ReviewContext'
import StarRating from './StarRating.jsx'

import comma from '../assets/images/review_comma.svg'


function HomeReviewItem() {
    const { reviews, loading, error } = useContext (ReviewContext);

    
    return (
        <>
        {reviews.slice(0,2).map((review) => (
            <div className='review' key={review.id}>
                {loading}
                {error}
                <div className="review_comma">
                    <img src={comma} alt="quotation marks" />
                </div>

                    < StarRating starRating={review.starRating} />

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
