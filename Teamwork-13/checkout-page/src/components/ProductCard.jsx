import { FaTrashAlt, } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const ProductCard = ({total, setTotal,tax,setTax,subtotal, setSubtotal, updateProductsData,card:{id,name,image,price,dampingRate,amount},data,deleteProduct}) => {
  const [qty, setQty] = useState(amount)
  const [unitTotal, setUnitTotal] = useState(price*dampingRate*qty)
  
  useEffect(() => {
    setSubtotal(data.reduce((acc,item)=>acc + item.amount * item.price * item.dampingRate, 0))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTax(subtotal*0.18)  
  }, [subtotal]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setTotal(subtotal+tax+25)
  }, [tax]) // eslint-disable-line react-hooks/exhaustive-deps
  
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
                  if (qty>0){
                    updateProductsData(id, qty-1)
                    setQty(qty-1)
                    setUnitTotal(price*dampingRate*(qty-1))
                    setSubtotal(subtotal-price*dampingRate)}}
                  }> - </div>
                <span className='amount'>{qty}</span>
                <div id='plus' onClick={()=>{
                    updateProductsData(id, qty+1)
                    setQty(qty+1)
                    setUnitTotal(price*dampingRate*(qty+1))
                    setSubtotal(subtotal+price*dampingRate)
                    }} > + </div>
            </div>
            <button type="button" className='remove-btn' onClick={()=>{
              deleteProduct(id)
              setSubtotal(subtotal-unitTotal)
              }}><FaTrashAlt /> Remove</button>
              
            <p>Product Total : ${unitTotal.toFixed(2)}</p>
        </div>

    </div>
  )
}

export default ProductCard