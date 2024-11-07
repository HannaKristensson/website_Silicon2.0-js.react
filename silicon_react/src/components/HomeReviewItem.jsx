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
    
    
{/* <img src={checkedStar} alt="One-star review." /> */}

    // const starList = () => {
    //     let starArray = [];
    //     let stars = reviews.starRating.count;
    //     console.log(stars)
    //     for(i = 0; i <= stars; i++) {
    //         starArray.push('star');
    //         console.log(starArray[i])
    //     }
    //     console.log(stars)
    //     const starResults = starArray.toString();
    //     setReviewStars(starResults)
    // }

    // for (i = 0 ; i <= 2 ; i++) {
    //     const li = document.createElement('li');
    //     li.appendChild(document.createElement(<img src={checkedStar} alt="One-star review." />));
    //     ulList.appendChild(li);
    // }

    const checked = () => {
        let stars = reviews.starRating;
        for (i = 0; i <= stars; i++ ) {
            li.appendChild(document.createTextNode('hej'));
            ulList.appendChild(li);
            console.log(stars)
        }
        // let stars = '<img src={checkedStar} alt="One-star review." 
        // setCheckedStars(stars)
    }
    console.log(checkedStars)

    // console.log(reviewStars)



    // const filteredReviews = reviews.filter(review => review.tags && review.tags.includes("selectedReview"));

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
