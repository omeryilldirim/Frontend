import "./Counter.css"
import { useDispatch, useSelector } from "react-redux"
import { dec, inc, reset } from "../../redux/actions/counterAction"

//! Reducer'lara key olarak isim atamasi yapilmazsa bu sekilde cagrilabilriler.
//? const counter = useSelector((state) => state.counterReducer.counter)
//? const todoList = useSelector((state) => state.todoReducer.todoList)

const Counter = () => {
  const dispatch = useDispatch()
  // const counter = useSelector((state) => state.counter)
  // const counter = useSelector((state) => state.count.counter)
  const { counter } = useSelector((state) => state.count)

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREASE" })}
          onClick={() => dispatch(inc())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "RESET" })}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: "DECREASE" })}
          onClick={() => dispatch(dec())}
        >
          decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
