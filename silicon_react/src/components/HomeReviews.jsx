import checkedStar from '../assets/images/review_star-checked.svg'
import uncheckedStar from '../assets/images/review_star-unchecked.svg'
import comma from '../assets/images/review_comma.svg'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ReviewContext } from '../contexts/ReviewContext'
import HomeReviewItem from './HomeReviewItem'


function Reviews() {

    // const { tag } = useParams()
    // const { reviews, review } = useContext(ReviewContext)

    // const filteredReviews = reviews.filter(review => review.tags && review.tags.includes(tag));

  return (


    <section className="page_reviews container padding-rl">
        <h2>Clients are Loving Our App</h2> 
            {
                <HomeReviewItem/>
            }
    </section>
  )
}

export default Reviews
