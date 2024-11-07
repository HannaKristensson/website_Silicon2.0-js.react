import React, { useContext, useEffect }  from 'react'
import { ReviewContext } from '../contexts/ReviewContext'

import comma from '../assets/images/review_comma.svg'


function HomeReviewItem() {
    const { reviews } = useContext (ReviewContext);

    // const { reviwItems, setReviewItems } = useState([]);
    // useEffect(() => {
    //     fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    //     .then((res) => {
    //         return res,json();
    //     })
    //     .then((data) => {
    //         console.log(data);
    //         setReviewItems(data);
    //     })
    // })
    // const filteredReviews = reviews.filter(review => review.tags && review.tags.includes("selectedReview"));



  return (
    <div>  
    {filteredReviews.slice(0,2).map(review => (
        <reviewItem key={review.id} item={review} >
            <div className='review'>
                <div className="review_comma">
                    <img src={comma} alt="quotation marks." />
                </div>
                <p>{review.comment}</p>
            </div>
            <div className="review_avatar">
                <img src={review.avatarUrl} alt="Picture of user."/>
                    <div>
                        <h6>{review.author}</h6>
                        <p>{review.jobRole}</p>
                    </div>
            </div>

        </reviewItem>
        ))}
      </div>
  )
}

export default HomeReviewItem
