const API_ENDPOINT = "https://api.themoviedb.org/3";

export const getMovieList = async (page) => {
    try {
        const params = new URLSearchParams();
        params.append('include_adult', false);
        params.append('language', 'en-US');
        params.append('page', page);
        params.append('sort_by', 'popularity_desc');
       const apiResponse =  await fetch(API_ENDPOINT+"/discover/movie?"+params.toString(), {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU4ZjM0MWMwYTE1OWVkNjUzMDJkZWQzMzNhODY4ZSIsInN1YiI6IjY2NjczMTc2MDgxOGU2ZjlkY2FhNTE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.artarMIII2v01-BAALDOWe5SJ7sQDVCJOMbMGjynSWM'
            }
            });
        const jsonResponse = await apiResponse.json();
        return jsonResponse;
    }
    catch (e) {
        console.error(e);
    }
}

export const searchMovie = async (movieName, page) => {
    try {
        const params = new URLSearchParams();
        params.append('query', movieName);
        params.append('include_adult', false);
        params.append('language', 'en-US');
        params.append('page', page);
        const apiResponse =  await fetch(API_ENDPOINT+"/search/movie?"+params.toString(), {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzU4ZjM0MWMwYTE1OWVkNjUzMDJkZWQzMzNhODY4ZSIsInN1YiI6IjY2NjczMTc2MDgxOGU2ZjlkY2FhNTE2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.artarMIII2v01-BAALDOWe5SJ7sQDVCJOMbMGjynSWM'
            }
            });
        const jsonResponse = await apiResponse.json();
        return jsonResponse;
    }
    catch (e) {
        console.error(e);
    }
}