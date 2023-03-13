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
    <div className='p-4 flex items-center justify-center bg-color4'>
        <form className="flex items-center justify-center gap-8" onSubmit={handleSubmit}>
            <input className='px-3 py-1 border-2 border-color1 border-dashed outline-0 rounded bg-transparent' type="search" name="" id="" placeholder='Search movie...' 
            onChange={(e)=>setQuery(e.target.value)} autoFocus/>
            <button className='bg-cyan-600 text-color2 py-1 px-2 rounded hover:opacity-80' type="submit">Search</button>
        </form>
    </div>
  )
}

export default Header