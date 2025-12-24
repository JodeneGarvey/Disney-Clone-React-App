import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "98901e4a053393ed067375772dc091d2";

const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?api_key=98901e4a053393ed067375772dc091d2&";

export const getTrendingVideos = () => {
  return axios.get(
    `${movieBaseUrl}/trending/all/day?api_key=${api_key}`
  );
 
};

export const getPopularSeries = () => {
  return axios.get(
    `${movieBaseUrl}/tv/popular?api_key=${api_key}`
  );
 
};

export const getOrignalMovies = () =>{
  return axios.get(
    `${movieBaseUrl}/movie/popular?api_key=${api_key}`
  );
}


export const SearchMovies = async (query) => {
  const response = await fetch(`${movieBaseUrl}/search/movie?api_key=${api_key}&query=${encodeURIComponent(
    query)}`);
  const data = await response.json()
  return data.results
};

export const SearchSeries = async (query) => {
  const response = await fetch(`${movieBaseUrl}/search/tv?api_key=${api_key}&query=${encodeURIComponent(
    query)}`);
  const data = await response.json()
  return data.results
};


const getMoviesByGenreId=(id) =>
  axios.get(movieByGenreBaseURL+"with_genres="+id)

export default {
  getTrendingVideos,
  getMoviesByGenreId
};