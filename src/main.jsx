import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { MovieProvider } from './Context/MovieContext.jsx'
import { SeriesProvider } from './Context/SeriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MovieProvider>
      <SeriesProvider>
      <App />
      </SeriesProvider>
    </MovieProvider>
  </BrowserRouter>
    
)
