import checkedStar from '../assets/images/review_star-checked.svg'
import uncheckedStar from '../assets/images/review_star-unchecked.svg'
import comma from '../assets/images/review_comma.svg'
import maleAvatar from '../assets/images/review_avatar-male.svg'
import femaleAvatar from '../assets/images/review_avatar-female.svg'


function Reviews() {
  return (

    <section className="page_reviews container padding-rl">
        <h2>Clients are Loving Our App</h2> 
        <div className="review">
            <div className="review_comma">
                <img src={comma} alt="quotation marks." />
            </div>
            <div className="review_stars">
                <img src={checkedStar} alt="One-star review." />
                <img src={checkedStar} alt="two-star review." />
                <img src={checkedStar} alt="three-star review." />
                <img src={checkedStar} alt="four-star review."/>
                <img src={uncheckedStar} alt="Fifth star unchecked." />

            </div>
            <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
            <div className="review_avatar">
                <img src={femaleAvatar} alt="Picture of Fannie." />
                <div>
                    <h6>Fannie Summers</h6>
                    <p>Designer</p>
                </div>
            </div>
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
