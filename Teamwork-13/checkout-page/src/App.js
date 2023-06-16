import { useEffect, useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Button from './components/Button';
import Header from './components/Header';
import axios from "axios"
import CardTotal from './components/CardTotal';


function App() {
  const [show, setShow] = useState(false)
  const [data, setData] = useState("")

  const setToggle = () => setShow(!show)
  
  const getProductsData = async ()=>{
    const BASE_URL = "https://63fa046b473885d837d6e9d1.mockapi.io/products"
    try {
      const response = await axios(BASE_URL)
      setData(response.data)
    } catch (error) {
      alert(error)
    }
  }
  
    useEffect(() => {
      getProductsData()
    }, [])
  
  const updateProductsData = async (id,num)=>{
    const BASE_URL = "https://63fa046b473885d837d6e9d1.mockapi.io/products"
    try {
      await axios.put(`${BASE_URL}/${id}`, {amount:num})
    } catch (error) {
      alert(error);
    }
  }

  const addProduct = async (newProduct)=>{
    const BASE_URL = "https://63fa046b473885d837d6e9d1.mockapi.io/products"
    try {
      await axios.post(`${BASE_URL}`, newProduct)
      await getProductsData()
    } catch (error) {
      alert(error)
    }
  }

  const deleteProduct = async (id) =>{
    const BASE_URL = "https://63fa046b473885d837d6e9d1.mockapi.io/products"
    try {
      await axios.delete(`${BASE_URL}/${id}`)
      await getProductsData()
    } catch (error) {
      alert(error)
    }
  }
  
  return (
    <div className="App">
      <Header />
      
      {show || <Button setToggle={setToggle} show={show}/>}
      
      <main className='main-container'>
        {show && <AddProduct  setToggle={setToggle} show={show} addProduct={addProduct} />}
        <CardTotal updateProductsData={updateProductsData} data={data} deleteProduct={deleteProduct}/>
      </main>

    </div>
  );
}

export default App;
