import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const CardTotal = ( {data, updateProductsData} ) => { 
  const shippingPrice = 25.00
  data = [...data]

  const [subtotal, setSubtotal] = useState(0) 
  const [tax, setTax] = useState(subtotal*0.18)
  const [total, setTotal] = useState(subtotal+tax+shippingPrice) 
  
  useEffect(() => {
    setSubtotal(data.reduce((acc,item)=>acc + item.amount * item.price * item.dampingRate, 0))
  }, [])
  
  return (
    <div className="cards-container">
        <div className="products-container">
        {data.map((item)=> {
          // setSubtotal(subtotal+(item.price * item.dampingRate)*item.amount)
          // console.log(subtotal);
          return <ProductCard setTotal={setTotal} tax={tax} setTax={setTax} subtotal={subtotal} setSubtotal={setSubtotal} updateProductsData={updateProductsData} card={item} key={item.id}/>
        })}
        </div>
        <div className="payment-container">
          <div className="subtotal"><strong>Subtotal</strong><span>$ {subtotal}</span></div>
          <div className="tax"><strong>Tax(%18)</strong><span>$ {tax.toFixed(2)}</span></div>
          <div className="shipping"><strong>Shipping</strong><span>$ {shippingPrice.toFixed(2)}</span></div>
          <div className="total"><strong>Total</strong><span>$ {total.toFixed(2)}</span></div>
        </div>
    </div>
  );
};

export default CardTotal;