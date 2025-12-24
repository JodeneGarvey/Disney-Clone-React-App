import React, { createContext, useContext, useEffect, useState } from 'react'

const SeriesContext = createContext()

export const useSeriesContext = () => useContext(SeriesContext)

export const SeriesProvider = ({children}) => {
    const [watchList, setWatchList] = useState([])

    useEffect(()=> {
        const storedList = localStorage.getItem("watchList")

        if (storedList) setWatchList(JSON.parse(storedList))
    },[])

    useEffect(()=> {
        localStorage.setItem('watchList', JSON.stringify(watchList))
    }, [watchList])

    const addToWatchList = (show) => {
        setWatchList(prev => [...prev,show])
    }
    const removeFromWatchList = (showId) => {
        setWatchList(prev => prev.filter(show => show.id != showId))
    }

    const isWatchList = (showId) => {
        return watchList.some(show => show.id === showId)
    }

    const value = {
        watchList,
        addToWatchList,
        isWatchList,
        removeFromWatchList
    }

    return <SeriesContext.Provider value={value}>
        {children}
    </SeriesContext.Provider>
}
