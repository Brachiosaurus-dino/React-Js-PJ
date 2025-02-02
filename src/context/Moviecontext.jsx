import { createContext, useEffect, useState, useContext } from "react";
// Here we create MovieContext varible to context
const MovieContext = createContext()
// Here we use MovieContext in useMovieContext and in last lines we have access to aall children
export const useMovieContext = () => useContext(MovieContext)
// Here we create variable which through which we access all children
export const MovieProvider = ({ children }) => {

    const [favorites, setFavorites] = useState([])

    //This is use to get movies from localtorage

    useEffect(() => {
        const storeFavs = localStorage.getItem("favorites")
        if (storeFavs) setFavorites(JSON.parse(storeFavs))
    }, [])

    //This is use to set/add movies in localtorage

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    //This is use to add movies in array which furthur goes to localStorage (setiem)

    const addToFavorites = (movie) => {
        setFavorites((prev) => [...prev, movie])
    }

    // This is use to remove movies from array beafore removing we get from localStorage (getitem)

    const removeFromFavorites = (movieID) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieID))
    }

    // This is use to find movies from array in favourite page    

    const isFavorite = (movieID) => {
        return favorites.some(movie => movie.id === movieID)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}


// 
//Here We use "useContext" to use all componets without props its like a parent access to all children 
// 