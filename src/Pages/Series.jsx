import React, {useState, useEffect} from 'react'
import SeriesCard from '../Components/SeriesCard'
import { getPopularSeries } from '../Services/GlobalApi'

function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchSeries = async () => {
    try {
      const response = await getPopularSeries();
      // Ensure we always have an array
      setSeries(Array.isArray(response.data.results) ? response.data.results : []);
    } catch (err) {
      console.error(err);
      setError("Failed to load series");
    } finally {
      setLoading(false);
    }
  };

  fetchSeries();
}, []);

  return (
    <div className="min-h-screen bg-black text-white px-5 md:px-10 py-10">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">
        Trending Series
      </h1>

      {/* Error */}
      {error && (
        <p className="text-red-400 mb-6">{error}</p>
      )}

      {/* Loading */}
      {loading ? (
        <p className="text-gray-400 text-lg">Loading series...</p>
      ) : (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
          lg:grid-cols-5 gap-5"
        >
          {series.map((show) => (
            <SeriesCard key={show.id} show={show} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Series