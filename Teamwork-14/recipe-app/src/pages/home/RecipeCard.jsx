import React from 'react'
import { useNavigate} from 'react-router-dom'

const RecipeCard = ({item}) => {
  const navigate = useNavigate()

  return (
    <div>
        <h5>{item.recipe.label}</h5>
        <img src={item.recipe.images.SMALL.url} alt="recipe" />
        <button onClick={()=> navigate("/details", {state:item})} >More...</button>
    </div>
  )
}

export default RecipeCard