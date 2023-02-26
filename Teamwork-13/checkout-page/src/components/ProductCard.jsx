import { FaTrashAlt, } from 'react-icons/fa';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const ProductCard = ({card:{id,name,image,price,dampingRate,amount}}) => {
  
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
                <AiFillMinusCircle size="25px" color="gray" /> 
                <span className='amount'>{amount}</span> 
                <AiFillPlusCircle size="25px" color="gray" />
            </div>
            <button className='remove-btn'><FaTrashAlt /> Remove</button>
            <p>Product Total : ${(price * dampingRate).toFixed(2) * amount}</p>
        </div>

    </div>
  )
}

export default ProductCard