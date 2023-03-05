import React from 'react'
import { useNavigate} from 'react-router-dom'
import { RecipeDiv } from './Style'

const RecipeCard = ({item}) => {
  const navigate = useNavigate()

  return (
    <RecipeDiv>
        <h4>{item.recipe.label}</h4>
        <img src={item.recipe.images.SMALL.url} alt="recipe" />
        <button onClick={()=> navigate("/details", {state:item})} >More...</button>
    </RecipeDiv>
  )
}

export default RecipeCard