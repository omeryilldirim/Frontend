

const Button = ({setToggle, show}) => {

    return (
    <button onClick={setToggle}>
        { show ? "Hide Product Bar" : "Show Product Bar"}
    </button>
  )
}

export default Button