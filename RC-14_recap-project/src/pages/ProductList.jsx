
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios"


const ProductList = () => {
  const [products, setProducts] = useState([])
  const url = process.env.REACT_APP_API_URL
  const [loading, setLoading] = useState(true)
  const [errorState, setErrorState] = useState(false)

  const getProducts = async () => {
    
    try {
      const {data} = await axios(`${url}`)
      setProducts(data)
      setLoading(false)
      setErrorState(false) //error verip daha sonra başarılı olursa error state i ilk haline çevirecek.
    } catch (error) {
      alert(error);
      setErrorState(true)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? <p className="text-center text-danger w-100">Loading...</p> :
         products.length ? (       
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((item)=> <ProductCard key={item.id} item={item}/>) }
            </article>
            <article className="col-md-5 m-3">
              <CardTotal />
            </article>
          </>) : (<p className="text-center text-danger w-100">No products data...</p>) }

          {/* {!errorState && <p className="text-center text-danger w-100">No products data...</p> } */}

          {/* {errorState && <p className="text-center text-danger w-100">Error...</p>} */}
      </div>
    </div>
  );
};

export default ProductList;
