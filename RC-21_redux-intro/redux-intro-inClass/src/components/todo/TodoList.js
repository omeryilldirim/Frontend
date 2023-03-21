import { useDispatch, useSelector } from "react-redux"
import { clear } from "../../redux/actions/todoAction"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList)
  const dispatch = useDispatch()

  const handleClearList = () => {
    dispatch(clear())
  }

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
