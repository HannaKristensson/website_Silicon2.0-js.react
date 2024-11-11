import HomeReviewItem from './HomeReviewItem'


function Reviews() {

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
