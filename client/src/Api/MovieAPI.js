

const MOVIE_DB_API = '62f39555ad4630e6aa093145adbd1abc';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';
// "/zGVbrulkupqpbwgiNedkJPyQum4.jpg"
function requestMovies(url, callback) {

    fetch(url)

        .then((res) => res.json())

        .then(callback)

        .catch((error) => {
            console.error('Error:', error);
          });
}

function generateMovieDBUrl(path) {

    const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;

    return url;

}


function getTopRatedMovies(callback) {

    const url = generateMovieDBUrl(`/movie/top_rated`);

    
    requestMovies(url, callback);

}



//funtion to generate top upcoming movies

function searchUpcomingMovies(callback) {

    const url = generateMovieDBUrl('/movie/upcoming');

    

    requestMovies(url,callback);

}



//a different function for search movies

function searchMovie(value, callback) {

    const url = generateMovieDBUrl('/search/movie') + '&query=' + value;

    requestMovies(url, callback);

}



// funtion to find videos based on movie id

function getVideosByMovieId(movieId, callback) {

    const url = generateMovieDBUrl(`/movie/${movieId}/videos`);

   

    requestMovies(url, callback);

}


export default {
requestMovies, generateMovieDBUrl, getTopRatedMovies, searchUpcomingMovies, searchUpcomingMovies

}