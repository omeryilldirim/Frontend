import { useEffect, useState } from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import Button from './components/Button';
import Header from './components/Header';
import axios from "axios"
import CardTotal from './components/CardTotal';


function App() {
  const [show, setShow] = useState(false)
  const setToggle = () => setShow(!show)
  const [data, setData] = useState("")

  useEffect(() => {
    getProductsData()
  }, [])
  
  const getProductsData = async ()=>{
    const BASE_URL = "https://63fa046b473885d837d6e9d1.mockapi.io/products"
    try {
      const response = await axios(BASE_URL)
      setData(response.data)
    } catch (error) {
      alert(error)
    }
  }
 console.log(data);
  return (
    <div className="App">
      <Header />
      
      {
        show ? 
        (<AddProduct  setToggle={setToggle} show={show} />) : 
        (<Button setToggle={setToggle} show={show}/>)
      }

      <CardTotal data={data}/>
      
    </div>
  );
}

export default App;
