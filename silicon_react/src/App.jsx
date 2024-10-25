import './assets/css/stylesheet.css'
import './assets/css/contact.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Brandbox from './components/Brandbox'
import Frontpage from './components/Frontpage'
import Features from './components/Features'
import How from './components/How'
import TransferReceive from './components/TransferReceive'
import Reviews from './components/Reviews'
import Questions from './components/Questions'
import Newsletter from './components/Newsletter'

function App() {


  return (

    <>
    < Header />

    <main>

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

    </main>
    
    < Footer />

    </>
  )
}

export default App
