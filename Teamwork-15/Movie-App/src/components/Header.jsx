import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const Header = ({getResults}) => {
  const [query, setQuery] = useState("")
  const {user} = useAuthContext()

  const handleSubmit = (e)=>{
    if(user){
      e.preventDefault()
      getResults(query)
    } else {
      e.preventDefault()
      alert("Please login to search a movie!")
    }
  
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