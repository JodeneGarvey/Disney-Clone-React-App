import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/ProductionHouse'
import GenreMovieList from './Components/GenreMovieList'
import { MovieProvider } from './Context/MovieContext'
import WatchList from './Pages/WatchList'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Movies from './Pages/Movies'
import Series from './Pages/Series'
import Originals from './Pages/Originals'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <div className="">
        <Header/>
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Slider/>
              <ProductionHouse/>
              <GenreMovieList />
            </>
          }
          />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
         
          <Route path="/watchList" element={<WatchList />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/series" element={<Series />} />
        </Routes>
      </main>
      
      
     
    </div>
  )
}

export default App
