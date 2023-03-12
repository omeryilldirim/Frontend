import React, { useState } from 'react'

const Header = ({getResults}) => {
  const [query, setQuery] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault()
    getResults(query)
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="search" name="" id="" placeholder='Search movie...' 
            onChange={(e)=>setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Header