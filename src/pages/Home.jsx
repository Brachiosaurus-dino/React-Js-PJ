import MovieCard from "../components/Movie_card"
import { searchMovies , getPopularMovies } from "../services/api";
import { useState , useEffect} from "react";
import '../css/Home.css'



function Home(){

    const [searchQuery , setSearchquery] = useState("");
    const [movies , setMovies ] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch (err) {
                console.log(err)
                setError("Failed To Load MOvies.....")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handlesearch= async (e) => {
        e.preventDefault();
        // Here we trim the input because if someon give sapces than it removes 
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
                const searchResults = await searchMovies(searchQuery)
                setMovies(searchResults)
                setError(null)
        }   
        catch(err){
            console.log(err)
            setError("Failed to Load Movies/Series....")

        }
        finally{
            setLoading(false)
        }

        setSearchquery("")

    };

    return(
        <div className="home">
            <form onSubmit={handlesearch} className="search-form">
                <input type="text"
                placeholder="Search..." 
                className="search-input"
                value={searchQuery}
                // Here we take value from input then give it to setSearchquery the using useSate we give value to searchquery
                onChange={(e) => setSearchquery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-messege">{error}</div> }

            {loading ? (<div className="loading">Loading...</div>) : (<div className="movies-grid">
                {/* Here we are using this function to show movies in grid
                1. movies is list of movies
                2. map is a function use to apply on all movies or iterate on each movie
                3. then Moviecard component show the movies
                4. mop is the variable who pass movies from arrray in api to Moviecard one by one  */}
                {movies.map((mop) => (
                <MovieCard movie={mop} key={mop.id}/>
                    
                ))}
            </div>) }
            
        </div>
        
    );
}

export default Home;