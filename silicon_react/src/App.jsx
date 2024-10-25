import './assets/css/stylesheet.css'

// import './assets/css/contact.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Brandbox from './components/Brandbox'
import Frontpage from './components/Frontpage'
import Features from './components/Features'

function App() {


  return (

    <>
    < Header />
    <main>
      <div class="gradient">
        < Frontpage />
      </div>
    < Features />
    < Brandbox />
    < Footer />
    </main>
    </>
  )
}

export default App
