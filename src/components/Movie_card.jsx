import '../css/Moviecard.css'
import { useMovieContext } from '../context/Moviecontext';

function MovieCard({movie}){

    const{isFavorite , addToFavorites , removeFromFavorites } = useMovieContext()
    // This tells us we favourite it or not
    const favorite = isFavorite(movie.id)
    // Here we using this function in Favorites page 
    function onFavoriteclick (e) {
        e.preventDefault()
        // If movie already favorite than remove it
        if(favorite)removeFromFavorites(movie.id)
        // if not added than add it
        else addToFavorites(movie)
    }

    return(
        <div className="movie-card">
    <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    {/* This tells us we want to change the color of button after clicking */}
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteclick}>
                    ♥
                </button>
            </div>

            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                {/* This is sued to show only year here 0 means year */}
                <p>{movie.release_date?.split("-")[0]}</p>

            </div>
           

        </div>
    )
}

export default MovieCard;