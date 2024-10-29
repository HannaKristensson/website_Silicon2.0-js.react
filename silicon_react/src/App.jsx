import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/stylesheet.css'
import './assets/css/contact.css'
import Home from './Pages/Home'
import ContactUs from './Pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'



function App() {


  return (

  <BrowserRouter>
    < Header />
      <main>
        <Routes>
          <Route path="/home"  element={< Home />} />
          <Route path="/Contact"  element={< ContactUs />} />
        </Routes>
      </main>
    < Footer />
  </BrowserRouter>
  )
}

export default App
