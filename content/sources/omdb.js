/*    /content/sources/movie-find.js    */
/* eslint-disable */

// import { OMDB_API_KEY } from "fusion:environment";

const resolve = query => {
  const requestUri = `https://www.omdbapi.com/?apikey=b4d97e&plot=full`;

  if (query.hasOwnProperty("movieTitle"))
    return `${requestUri}&t=${query.movieTitle}`;

  throw new Error("movie-find content source requires a movieTitle");
};

export default {
  resolve,
  params: {
    movieTitle: "text"
  }
};
