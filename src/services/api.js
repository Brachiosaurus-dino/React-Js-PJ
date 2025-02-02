const API_KEY = "8ce964b993ccbfd74b1b39cf453696c2";
const BASE_URL ="https://api.themoviedb.org/3";
// Here we use getpopular movies fuction and call popular movie from api 
export const getPopularMovies = async ()=> {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results;
};
// Here we use seacrchmovies fuction and search movie from api 
export const searchMovies = async (query)=> {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results;
}


// Here we use getppopular movies fuction and call popular movie from api 