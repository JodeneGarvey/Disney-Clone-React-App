import React, { useEffect, useState } from 'react'
import { getPopularSeries, SearchMovies, SearchSeries } from '../Services/GlobalApi';
import MovieCard from '../Components/MovieCard';
import SeriesCard from '../Components/SeriesCard';

function Search() {
    const [searchQuery, setSearchQuery] = useState("")

    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [error, setError] = useState([null]);
    const [loading, setLoading] = useState([false]);

    useEffect(() => {
        const loadTrendingMovies = async () => {
            try{
                const trendingMovies = await getTrendingVideos()
                setMovies(trendingMovies)
            }catch (err){
                console.log(err)
                setError(null)
            }
            finally {
                setLoading(false)
            }
        }
        loadTrendingMovies();
    }, [])

    useEffect(() => {
        const loadPopularSeries = async () => {
            try{
                const popularseries = await getPopularSeries()
                setSeries(popularseries)
            }catch (err){
                console.log(err)
                setError(null)
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularSeries();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return;

        setLoading(true)

        try {
            const movieResults = await SearchMovies(searchQuery);
            const seriesResults = await SearchSeries(searchQuery)

            setMovies(movieResults || []);
            setSeries(seriesResults || []);

            setError(null);

        }catch (err) {
            console.error(err)
            setError("Failed to Find Movies or Show");
        }finally {
            setLoading(false)
        }
    }
  return (
    <div className="w-full flex justify-center px-4 py-10">

      <div className="w-full max-w-6xl"> 
        {/* 🔵 SEARCH BAR - full navbar width */}
        <form 
          onSubmit={handleSearch} 
          className="flex items-center gap-4 mb-10 w-full"
        >
          <input
            type="text"
            placeholder="Search for Movies or Series ..."
            className="w-full px-5 py-3 rounded-lg
              bg-[#0c162d] text-white placeholder-gray-400
              border border-gray-700
              focus:outline-none focus:ring-2 focus:ring-red-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button
            type="submit"
            className="px-8 py-3 rounded-lg
              bg-red-600 text-white font-semibold
              hover:bg-red-700 transition-all duration-200"
          >
            Search
          </button>
        </form>

        {/* 🔵 LOADING */}
        {loading && <div className="text-gray-400 text-lg mb-6">Loading...</div>}

        {/* 🔵 MOVIES */}
        {!loading && searchQuery && movies.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-5">Movies</h2>

            <div className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
              gap-6
            ">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          </>
        )}

        {/* 🔵 SERIES */}
        {!loading && searchQuery && series.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-10 mb-5">Series</h2>

            <div className="
              grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
              gap-6
            ">
              {series.map((show) => (
                <SeriesCard show={show} key={show.id} />
              ))}
            </div>
          </>
        )}

        {/* 🔴 NO RESULTS */}
        {!loading && movies.length === 0 && searchQuery && (
          <p className="text-gray-400 mt-10">
            No results found for “{searchQuery}”
          </p>
        )}
      </div>
    </div>
    
  )
}

export default Search