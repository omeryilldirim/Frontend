

const Button = ({setToggle, show}) => {

    return (
      <div className="btn-container">
          <button className="show-btn" onClick={setToggle}>
            { show ? "Hide Product Bar" : "Show Product Bar"}
          </button>
      </div>
  )
}

export default Button