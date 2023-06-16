import { useState } from "react";
import ProductCard from "./ProductCard";

const CardTotal = ( {data, updateProductsData, deleteProduct} ) => { 
  const shippingPrice = 25.00
  data = [...data]

  const [subtotal, setSubtotal] = useState(0) 
  const [tax, setTax] = useState(subtotal*0.18)
  const [total, setTotal] = useState(subtotal+tax+shippingPrice) 

  return (
    <div className="cards-container">
        <div className="products-container">
        {data.map((item)=> {
          return <ProductCard total={total} setTotal={setTotal} tax={tax} setTax={setTax} subtotal={subtotal} setSubtotal={setSubtotal} updateProductsData={updateProductsData} card={item} key={item.id} data={data} deleteProduct={deleteProduct}/>
        })}
        </div>
        <div className="payment-container">
          {console.log(subtotal, tax)
          }
          <div className="subtotal"><strong>Subtotal</strong><span>$ {subtotal.toFixed(2)}</span></div>
          <div className="tax"><strong>Tax(%18)</strong><span>$ {tax.toFixed(2)}</span></div>
          <div className="shipping"><strong>Shipping</strong><span>$ {subtotal>0 ? (shippingPrice.toFixed(2)) : 0}</span></div>
          <div className="total"><strong>Total</strong><span>$ {subtotal > 0 ? (total.toFixed(2)): 0}</span></div>
        </div>
    </div>
  );
};

export default CardTotal;