import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import axios from "axios"
import RecipeCard from './RecipeCard'

const Home = () => {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")
  const [mealType, setMealType] = useState("breakfast")
  const [error, setError] = useState(false)
  const apiId = process.env.REACT_APP_API_ID
  const apiKey = process.env.REACT_APP_API_KEY
  const url = "https://api.edamam.com/api/recipes/v2?type=public"

  const getResults = async(query,mealType)=>{
    setError(false)
    try {
      const {data:{hits:data}} = await axios(`${url}&q=${query}&mealType=${mealType}&app_id=${apiId}&app_key=${apiKey}`)
      setData(data)
      data.length || setError(true)
    } catch (error) {
      alert(error)
    }
  }
  
  useEffect(() => {
    getResults(query,mealType)
  }, [])
  

  return (
    <div>
        <Header getResults={getResults} query={query} setQuery={setQuery} mealType={mealType} setMealType={setMealType}/>
        <div className='recipes-container'>
          {error ? <p>No results found...Please try again...</p> : (
            data.map((item,i)=> <RecipeCard item={item} key={i+1}/>)
          )}
        </div>
    </div>
  )
}

export default Home