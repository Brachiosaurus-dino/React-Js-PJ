import '../css/Favorites.css'
import { useMovieContext } from '../context/Moviecontext';
import MovieCard from '../components/Movie_card';
function Favorites() {

  const { favorites } = useMovieContext()
  //This is use to show movies we favourite
  if (favorites) {
    return (
      <div className='favorites'>
        <h2>Favorite movies...</h2>
        <div className="movies-grid">
          {favorites.map((mop) => (
            <MovieCard movie={mop} key={mop.id} />

          ))}
        </div>
      </div>
    );
  }
  //This is use to show empty page
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
  )
}

export default Favorites;












// Feature yo display movie while typing automatically
// mop.title.toLocaleLowerCase().startsWith(searchQuery) &&