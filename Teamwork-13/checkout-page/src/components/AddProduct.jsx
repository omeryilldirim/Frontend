import Button from "./Button"


const AddProduct = ({show, setToggle}) => {
    return (
    <div>
        <Button setToggle={setToggle} show={show} />
        <p>showing product</p>
    </div>
  )
}

export default AddProduct