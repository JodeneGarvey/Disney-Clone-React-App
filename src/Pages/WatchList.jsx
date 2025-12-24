import React from 'react'
import { useMovieContext } from '../Context/MovieContext'
import MovieCard from '../Components/MovieCard'
import { useSeriesContext } from '../Context/SeriesContext'
import SeriesCard from '../Components/SeriesCard'

function WatchList() {

    const {watchList: moviesToWatch } = useMovieContext()
    const {watchList: seriesToWatch} = useSeriesContext()

    const hasWatchList = (moviesToWatch && moviesToWatch.length > 0) || 
                        (seriesToWatch && seriesToWatch.length > 0)

    if (hasWatchList){
        return (
            <div className="min-h-screen bg-black text-white px-5 md:px-10 py-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    Your Watch List
                </h2>

                {moviesToWatch && moviesToWatch.length > 0 && (
                    <>
                    <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-300">
                        Movies
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {moviesToWatch.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                    </>
                )}
                
                {seriesToWatch && seriesToWatch.length > 0 && (
                    <>
                    <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-300">
                        Series
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {seriesToWatch.map((show) => (
                            <SeriesCard show={show} key={show.id} />
                        ))}
                    </div>
                    </>
                )}
            </div>
        )
    }
  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 text-gray-400">
          <p className="text-xl md:text-2xl mb-3">
            No movies or series in your Watch List
          </p>
          <p className="text-sm md:text-base">
            Add movies or series to keep track of what you want to watch later
          </p>
        </div>
  )
}

export default WatchList