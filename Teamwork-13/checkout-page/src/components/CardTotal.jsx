import ProductCard from "./ProductCard";

const CardTotal = ( {data} ) => { 
    data = [...data]
  return (
    <div className="cards-container">
        <div className="products-container" onClick={(e)=>console.log(e.target.id)}>
        {data.map((item)=> <ProductCard card={item} key={item.id}/>)}
        </div>
        <div className="payment-container">
          <div className="subtotal"><strong>Subtotal</strong><span>$0</span></div>
          <div className="tax"><strong>Tax(%18)</strong><span>$0</span></div>
          <div className="shipping"><strong>Shipping</strong><span>$0</span></div>
          <div className="total"><strong>Total</strong><span>$0</span></div>
        </div>
    </div>
  );
};

export default CardTotal;