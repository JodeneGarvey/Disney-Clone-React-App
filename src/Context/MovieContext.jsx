import React, { createContext, useContext, useEffect, useState } from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [watchList, setWatchList] = useState([])

    useEffect(()=> {
        const storedList = localStorage.getItem("watchlist")

        if (storedList) setWatchList(JSON.parse(storedList))
    },[])

    useEffect(()=> {
        localStorage.setItem('watchList', JSON.stringify(watchList))
    }, [watchList])

    const addToWatchList = (movie) => {
        setWatchList(prev => [...prev,movie])
    }
    const removeFromWatchList = (movieId) => {
        setWatchList(prev => prev.filter(movie => movie.id != movieId))
    }

    const isWatchList = (movieId) => {
        return watchList.some(movie => movie.id === movieId)
    }

    const value = {
        watchList,
        addToWatchList,
        isWatchList,
        removeFromWatchList
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
