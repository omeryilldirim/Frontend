import Button from "./Button"
import { BsFillCartPlusFill } from "react-icons/bs";
import { useForm } from "react";

const AddProduct = ({show, setToggle}) => {
    const {register, getValues} = useForm()
  
    return (
    <div className="addProduct-container">
        <Button setToggle={setToggle} show={show} />
          <form action="">
            <label htmlFor="name">Product Name</label>
            <input type="text" name="product-name" id="name" />
            <label htmlFor="price">Product Price</label>
            <input type="number" name="product-price" id="price" />
            <label htmlFor="qty">Product Quantity</label>
            <input type="number" name="product-price" id="qty" />
            <label htmlFor="image">Product Image</label>
            <div className="imgLink-container">
              <span>https://example.com</span>
              <input type="text" name="product-image" id="image" />
            </div>
            <button type="submit"> <BsFillCartPlusFill/><span>Add To Cart</span></button>
          </form>
        </div>
  )
}

export default AddProduct