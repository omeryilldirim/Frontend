import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

const MovieDetail = () => {
  const {state:{item}} = useLocation()
  const {title, overview,release_date,vote_average,vote_count,poster_path,original_language} = item
  const imgURL = `https://image.tmdb.org/t/p/w1280`
  const navigate = useNavigate()

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <img src={`${imgURL}${poster_path}`} alt="poster" width="200px"/>
        <p>Overview : {overview}</p>
        <p>Original Language : {original_language.toUpperCase()}</p>
        <p>Release Date : {release_date}</p>
        <p>Rating : {vote_average}</p>
        <p>Votes Counted : {vote_count}</p>
        <button onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    </div>
  )
}

export default MovieDetail