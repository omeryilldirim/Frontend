import { FaTrashAlt, } from 'react-icons/fa';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from 'react';

const ProductCard = ({setTotal,tax,setTax,subtotal, setSubtotal, updateProductsData,card:{id,name,image,price,dampingRate,amount}}) => {
  const [qty, setQty] = useState(amount)
  const [unitTotal, setUnitTotal] = useState(price*dampingRate*qty)


//   useEffect(() => {
//     setSubtotal((subtotal+unitTotal))
//     console.log("worked")
//   }, [unitTotal])

  useEffect(() => {
    setTax(subtotal*0.18)
  }, [subtotal])
  
  useEffect(() => {
    setTotal(subtotal+tax+25)
  }, [tax])
  
  
    return (
    <div className='card-container'>
        <div className='img-container'>
            <img src={image} alt="img" />
        </div>
        <div className='info-container'>
            <h4>{name}</h4>
            <p><span className='discounted-price'>${(price * dampingRate).toFixed(2)} </span>
                <span className='price-tag'>{price.toFixed(2)}</span></p>
            <div className='qty-counter'>
                <div id='minus' onClick={()=>{
                    updateProductsData(id, qty-1)
                    setQty(qty-1)
                    setSubtotal(subtotal-unitTotal)}} > - </div>
                <span className='amount'>{qty}</span>
                <div id='plus' onClick={()=>{
                    updateProductsData(id, qty+1)
                    setQty(qty+1)
                    setSubtotal(subtotal+unitTotal)}} > + </div>
                {/* <AiFillMinusCircle id="minus" size="25px" color="gray" /> 
                <span className='amount'>{amount}</span> 
                <AiFillPlusCircle size="25px" color="gray" /> */}
            </div>
            <button className='remove-btn'><FaTrashAlt /> Remove</button>
            <p>Product Total : ${unitTotal.toFixed(2)}</p>
        </div>

    </div>
  )
}

export default ProductCard