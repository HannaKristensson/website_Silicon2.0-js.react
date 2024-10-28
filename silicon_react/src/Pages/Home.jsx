import React from 'react'

import Frontpage from '../components/Frontpage'
import Brandbox from '../components/Brandbox'
import Features from '../components/Features'
import How from '../components/How'
import TransferReceive from '../components/TransferReceive'
import Reviews from '../components/Reviews'
import Questions from '../components/Questions'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
    <div class="gradient">
        < Frontpage />
    </div>
    < Brandbox /> 
    < Features />
    <div class="background-clr">
      < How />
    </div>
    < TransferReceive />
    <div class="background-clr page_reviews">
      < Reviews />
    </div>
    < Questions />
    < Newsletter />
    </>
  )
}

export default Home
