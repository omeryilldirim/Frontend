import Button from "./Button";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useState } from "react";

const AddProduct = ({ show, setToggle, addProduct }) => {
  const [newProduct, setNewProduct] = useState({dampingRate:0.8})

  return (
    <div className="addProduct-container">
      <Button setToggle={setToggle} show={show} />

      <form id="add-form"
        onSubmit={(e) => {
          // AddProduct()
          e.preventDefault();
          setNewProduct(newProduct)
          addProduct(newProduct);
          document.getElementById("add-form").reset()
        }}
      >
        <label htmlFor="name">Product Name</label>
        <input type="text" name="product-name" id="name" onChange={(e)=>{
          setNewProduct({...newProduct, name:e.target.value})
        }}/>
        <label htmlFor="price">Product Price</label>
        <input type="number" name="product-price" id="price" onChange={(e)=>{
          setNewProduct({...newProduct, price:Number(e.target.value)})
        }}/>
        <label htmlFor="qty">Product Quantity</label>
        <input type="number" name="product-price" id="qty" onChange={(e)=>{
          setNewProduct({...newProduct, amount:Number(e.target.value)})
        }}/>
        <label htmlFor="image">Product Image</label>
        <div className="imgLink-container">
          <span>https://example.com</span>
          <input type="text" name="product-image" id="image" onChange={(e)=>{
          setNewProduct({...newProduct, image:e.target.value})
        }}/>
        </div>
        <button type="submit">
          <BsFillCartPlusFill />
          <span>Add To Cart</span>
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
