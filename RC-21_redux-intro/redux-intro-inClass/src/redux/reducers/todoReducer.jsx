import { ADD_TODO } from "../types/todoTypes"

const initialState = {
  // todoList: [{ id: 1, text: "Work react redux", completed: false }],
  todoList: [],
}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      }

    default:
      return state
  }
}
export default todoReducer
