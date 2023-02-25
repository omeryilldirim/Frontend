import ProductCard from "./ProductCard";

const CardTotal = ( {data} ) => { 
    data = [...data]
  return (
    <div>
        {data.map((item)=> <ProductCard card={item} key={item.id}/>)}
    </div>
  );
};

export default CardTotal;