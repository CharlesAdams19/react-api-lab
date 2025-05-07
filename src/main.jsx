import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* if didnt have browser router , react router wouldnt work  */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)