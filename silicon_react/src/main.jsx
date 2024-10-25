import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './assets/css/stylesheet.css'
// import './assets/css/contact'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
