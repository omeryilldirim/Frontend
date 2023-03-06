import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';

const initialState = {
  name:"", image:"", price:0, dampingRate:0.8, amount:1
};

const NewProduct = () => {
  const [formData, setFormData] = useState(initialState)
  const url = process.env.REACT_APP_API_URL

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]:e.target.value})
  }

  const convertTypes = ()=>{
    setFormData({...formData, price:+formData.price, 
      amount:+formData.amount})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()   
    try {
      await axios.post(url, formData)
      setFormData(initialState)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='container'>
      <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} text="New"/>
    </div>
  );
}

export default NewProduct