import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';


function MovieList({ genreId, index_}) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getMovieByGenreId();
  }, [genreId]);

  const getMovieByGenreId = async () => {
    try {
      const resp = await GlobalApi.getMoviesByGenreId(genreId);
      setMovieList(resp?.data?.results || []);
    } catch (err) {
      console.error(err);
      setMovieList([]);
    }
  };

  const slideRight = () => {
    elementRef.current.scrollLeft += 500;
  };

  const slideLeft = () => {
    elementRef.current.scrollLeft -= 500;
  };

  return (
    <div className="relative">
      <IoChevronBackOutline
        onClick={slideLeft}
        className="hidden md:block text-[50px] text-white p-2
        cursor-pointer z-10 absolute top-1/2 -translate-y-1/2"
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none
        scroll-smooth pt-5 px-3 pb-5 hide-scrollbar scroll-smooth"
      >
        {movieList.map((item) => (
            <>
            <MovieCard key={item.id} movie={item} />
            </>
          
        ))}
      </div>

      <IoChevronForwardOutline
        onClick={slideRight}
        className="hidden md:block text-[50px] text-white p-2
        cursor-pointer z-10 absolute right-0 top-1/2 -translate-y-1/2"
      />
    </div>
   

      
  );
}

export default MovieList