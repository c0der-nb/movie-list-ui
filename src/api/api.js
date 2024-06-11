import axios from 'axios';

const API_ENDPOINT = "https://api.themoviedb.org/3";

export const getMovieList = async (page) => {
    try {
        const params = {
            include_adult: false,
            language: 'en-US',
            page,
            sort_by: "popularity.desc"
        };
        const apiResponse = await axios.get(API_ENDPOINT+"/discover/movie", { params, headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU4ZjM0MWMwYTE1OWVkNjUzMDJkZWQzMzNhODY4ZSIsInN1YiI6IjY2NjczMTc2MDgxOGU2ZjlkY2FhNTE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.artarMIII2v01-BAALDOWe5SJ7sQDVCJOMbMGjynSWM'
          } });
        return apiResponse.data;
    }
    catch (e) {
        console.error(e);
    }
}

export const searchMovie = async (movieName, page) => {
    try {
        const params = {
            query: movieName,
            include_adult: false,
            language: 'en-US',
            page,
        };
        const apiResponse = await axios.get(API_ENDPOINT+"/search/movie", { params,  headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU4ZjM0MWMwYTE1OWVkNjUzMDJkZWQzMzNhODY4ZSIsInN1YiI6IjY2NjczMTc2MDgxOGU2ZjlkY2FhNTE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.artarMIII2v01-BAALDOWe5SJ7sQDVCJOMbMGjynSWM'
          }});
        return apiResponse.data;
    }
    catch (e) {
        console.error(e);
    }
}