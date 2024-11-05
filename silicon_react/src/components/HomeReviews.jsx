import checkedStar from '../assets/images/review_star-checked.svg'
import uncheckedStar from '../assets/images/review_star-unchecked.svg'
import comma from '../assets/images/review_comma.svg'
import maleAvatar from '../assets/images/review_avatar-male.svg'
import femaleAvatar from '../assets/images/review_avatar-female.svg'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ReviewContext } from '../contexts/ReviewContext'


function Reviews() {

    const { tag } = useParams()
    const { reviews, review } = useContext(ReviewContext)

    const filteredReviews = reviews.filter(review => review.tags && review.tags.includes(tag));

  return (


    <section className="page_reviews container padding-rl">
        <h2>Clients are Loving Our App</h2> 
        <div className="review">
            <h1>hej {tag} </h1>
             <div className="review_comma">
                <img src={comma} alt="quotation marks." />
            </div>
            
            {
                filteredReviews.map(review => (
                    <ReviewItem key={review.id} item={review} />
                ))
            }

        </div>
        <div className="review">
            <div className="review_comma">
                <img src={comma} alt="quotation marks." />
            </div>
            <div className="review_stars">
                <img src={checkedStar} alt="One-star review."/>
                <img src={checkedStar} alt="two-star review."/>
                <img src={checkedStar} alt="three-star review."/>
                <img src={checkedStar} alt="four-star review."/>
                <img src={checkedStar} alt="Five-star review."/>

            </div>
            <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
            <div className="review_avatar">
                <img src={maleAvatar} alt="Picture of Albert."/>
                <div>
                    <h6>Albert Flores</h6>
                    <p>Developer</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Reviews
