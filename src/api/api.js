import axios from "axios";

//axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
axios.defaults.params = {
    api_key: '9dc2bc7aceb5d04bb628518c7503619e',
}

export const loadTrendFilms = async function () {
    const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day');
    return response.data;
}

export const loadDetailFilm = async function (movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`);
    return response.data;
}

export const loadCastFilm = async function (movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`);
    return response;
}

export const loadReviewsFilm = async function (movieId) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`);
    return response;
}

export const loadSearchFilm = async function (query) {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
    return response;
}