import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/stylesheet.css'
import './assets/css/contact.css'
import './assets/css/darkmode.css'
import './assets/css/lightmode.css'
import Home from './Pages/Home'
import ContactUs from './Pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import { ReviewProvider }  from './contexts/ReviewContext'



function App() {

  return (
    <ReviewProvider>
    <BrowserRouter>
    < Header />
      <main>
        <Routes>
          <Route path="/"  element={< Home />} />
          <Route path="/Contact"  element={< ContactUs />} />
        </Routes>
      </main>
    < Footer />
  </BrowserRouter>
  </ReviewProvider>

  )
}

export default App
