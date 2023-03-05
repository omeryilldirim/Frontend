import React, { useState } from 'react'

const Header = ({getResults}) => {
  const [query, setQuery] = useState("")
  const [mealType, setMealType] = useState("breakfast")
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(query, mealType);
    getResults(query,mealType)
  }
  return (
    <div>
        <h1>FOOD APP</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" id="query" placeholder='Search' onChange={(e)=> setQuery(e.target.value)}/>
            <button type="submit">Search</button>
            <select name="meal-type" id="meal-type" onChange={(e)=> setMealType(e.target.value)}>
                <option value="Breakfast" defaultselected="true">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Teatime">Teatime</option>
                <option value="Dinner">Dinner</option>
            </select>
        </form>
    </div>
  )
}

export default Header