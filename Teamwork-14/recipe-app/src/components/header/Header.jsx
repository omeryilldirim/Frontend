import React from 'react'

const Header = () => {
  return (
    <div>
        <h1>FOOD APP</h1>
        <form action="">
            <input type="text" name="query" id="query" placeholder='Search'/>
            <button type="submit">Search</button>
            <select name="meal-type" id="meal-type">
                <option value="Breakfast" selected>Breakfast</option>
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