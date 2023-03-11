import React from 'react'
import notFoundImg from "../assets/img/404.jpg"

const NotFound = () => {
  return (
    <div>
      <img className='notFound-img' src={notFoundImg} alt="404" />
    </div>
  )
}

export default NotFound