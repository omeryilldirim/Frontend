import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({item}) => {
  const imgURL = `https://image.tmdb.org/t/p/w1280`
  const navigate = useNavigate() 
  const {id, title, overview, poster_path,vote_average} = item
  
  return (
    <div >
      <img src={poster_path && `${imgURL}${poster_path}`} alt={poster_path ? "poster" : "No poster found"} width="150px"/>
      <p>{title}</p>
      <p>{vote_average}</p>
      <p>{overview}</p>
      <button onClick={()=>navigate(`/detail/${id}`, {state:id})} style={{backgroundColor:"black", color:"white",padding:"1rem"}}>detail</button>
    </div>
  )
}

export default MovieCard