import React, {useState, useEffect} from 'react'
import MovieCard from '../Components/MovieCard'
import { getOrignalMovies } from '../Services/GlobalApi'

function Original() {
  const [originals, setOriginals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchOriginalMovies = async () => {
    try {
      const response = await getOrignalMovies();
      // Ensure we always have an array
      setOriginals(Array.isArray(response.data.results) ? response.data.results : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load movies");
    } finally {
      setLoading(false);
    }
  };

  fetchOriginalMovies();
}, []);

  return (
    <div className="min-h-screen bg-black text-white px-5 md:px-10 py-10">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">
        Original Movies
      </h1>

      {/* Error */}
      {error && (
        <p className="text-red-400 mb-6">{error}</p>
      )}

      {/* Loading */}
      {loading ? (
        <p className="text-gray-400 text-lg">Loading movies...</p>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
          lg:grid-cols-5 gap-5"
        >
          {originals.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Original