import React from 'react'
import { useMovieContext } from '../Context/MovieContext';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
function MovieCard({movie}) {
    if (!movie?.backdrop_path) return null;
    const {isWatchList, addToWatchList, removeFromWatchList} = useMovieContext()

    const inWatchList = isWatchList(movie.id);

  function onWatchListClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (inWatchList) {
      removeFromWatchList(movie.id);
    } else {
      addToWatchList(movie);
    }
  }
  return (
    <div className="relative group min-w-[160px] md:min-w-[200px]">
      {/* Poster */}
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        alt={movie.title}
        className="w-full h-[240px] md:h-[300px]
        object-cover rounded-lg
        transition-transform duration-300
        group-hover:scale-105"
      />

      {/* Dark overlay on hover */}
      <div
        className="absolute inset-0 bg-black/50 rounded-lg
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300"
      />

      {/* Add to List Button */}
      <button
        onClick={onWatchListClick}
         title={inWatchList ? "Remove from Watchlist" : "Add to Watchlist"}
        className={`absolute top-2 right-2
        w-9 h-9 rounded-full
        bg-white text-black
        flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition-all duration-300 hover:scale-110"
       ${inWatchList
            ? 'bg-green-500 text-white'
            : 'bg-white text-black'}`}
        >
        {inWatchList ? '✓' : '+'}
      </button>
    </div>
  )
}

export default MovieCard