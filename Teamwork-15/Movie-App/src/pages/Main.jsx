import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

const Main = () => {
  const [movieList, setMovieList] = useState([])

  const discoverResults = async () => {
    const apiKey = process.env.REACT_APP_movieDB_api_key
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    
    try {
      const {data} = await axios(url)
      setMovieList(data.results)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    discoverResults()
  }, [])

  const getResults = async (query) => {
    const apiKey = process.env.REACT_APP_movieDB_api_key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`

    try {
      const {data} = await axios(`${url}&query=${query}`)
      setMovieList(data.results)
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <div>
      <Header getResults={getResults}/>
      {movieList.map((item)=> <MovieCard item={item} key={item.id}/>
      )}
    </div>
  )
}

export default Main