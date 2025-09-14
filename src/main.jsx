import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Toastify + Bootstrap Icons (already in your code)
import 'react-toastify/dist/ReactToastify.css'  
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 

   <App />
  </BrowserRouter>
   
)
