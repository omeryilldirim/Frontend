

const ProductCard = ({card:{id,name,image,price,dampingRate,amount}}) => {
  
    return (
    <div>
        <div>
            <img src={image} alt="img" />
        </div>
        <div>
            <h4>{name}</h4>
            <p> ${(price * dampingRate).toFixed(2)} <span>{price}</span></p>
            <div>
                
            </div>
            <button></button>
            <p>Product Total : ${(price * dampingRate).toFixed(2) * amount}</p>
        </div>

    </div>
  )
}

export default ProductCard