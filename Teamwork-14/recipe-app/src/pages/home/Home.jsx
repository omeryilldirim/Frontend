import React, { useState } from 'react'
import Header from '../../components/header/Header'
import axios from "axios"
import RecipeCard from './RecipeCard'

const Home = () => {
  // const apiId = process.env.REACT_APP_API_ID
  const [data, setData] = useState([])
  const apiId = "5339f823"
  const apiKey = "1886fdf1c87397dc37ecbebf315be0a5"
  const url = "https://api.edamam.com/api/recipes/v2?type=public"

  const getResults = async(query,mealType)=>{
    try {
      const {data:{hits:data}} = await axios(`${url}&q=${query}&mealType=${mealType}&app_id=${apiId}&app_key=${apiKey}`)
      setData(data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
        <Header getResults={getResults} />
        <div className='recipes-container'>
          {data.map((item,i)=> <RecipeCard item={item} key={i+1}/>)}
        </div>
    </div>
  )
}

export default Home