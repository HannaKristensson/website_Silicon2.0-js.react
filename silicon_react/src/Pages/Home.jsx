import React from 'react'

import HomeFrontpage from '../components/HomeFrontpage'
import HomeBrandbox from '../components/HomeBrandbox'
import HomeFeatures from '../components/HomeFeatures'
import HomeHow from '../components/HomeHow'
import HomeTransferReceive from '../components/HomeTransferReceive'
import HomeReviews from '../components/HomeReviews'
import HomeQuestions from '../components/HomeQuestions'
import HomeNewsletter from '../components/HomeNewsletter'

const Home = () => {
  return (
    <>
    <div className="gradient">
        < HomeFrontpage />
    </div>
    < HomeBrandbox /> 
    < HomeFeatures />
    <div className="background-clr">
      < HomeHow />
    </div>
    < HomeTransferReceive />
    <div className="background-clr page_reviews">
      < HomeReviews />
    </div>
    < HomeQuestions />
    < HomeNewsletter />
    </>
  )
}

export default Home
