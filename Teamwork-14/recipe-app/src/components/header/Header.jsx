import { HeaderDiv, HeaderForm } from "./Style"


const Header = ({getResults,query,setQuery,mealType,setMealType }) => {
  // const [query, setQuery] = useState("")
  // const [mealType, setMealType] = useState("breakfast")
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    getResults(query,mealType)
    document.getElementById("form").reset()
  }
  return (
    <HeaderDiv>
        <h1>FOOD APP</h1>
        <HeaderForm id="form" onSubmit={handleSubmit}>
            <input type="text" name="query" id="query" placeholder='Search recipe...' onChange={(e)=> setQuery(e.target.value)}/>
            <select name="meal-type" id="meal-type" onChange={(e)=> setMealType(e.target.value)}>
                <option value="Breakfast" defaultselected="true">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Snack">Snack</option>
                <option value="Teatime">Teatime</option>
                <option value="Dinner">Dinner</option>
            </select>
            <button type="submit">Search</button>
        </HeaderForm>
    </HeaderDiv>
  )
}

export default Header