import { ADD_TODO, CLEAR_TODO, DELETE_TODO, TOGGLE_TODO } from "../types/todoTypes";

const initialState = {
  // todoList: [{ id: 1, text: "Work react redux", completed: false }],
  todoList: [],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case CLEAR_TODO:
      return {
        todoList: [],
      };
    case DELETE_TODO:
      return {
        todoList: [
          ...state.todoList.filter((todo)=> todo.id !== payload)
        ]
      };
    case TOGGLE_TODO:
      return {
        todoList : [
          ...state.todoList.map( todo => todo.id === payload ? {...todo, completed:!todo.completed} : {...todo} )
        ]
      }
    default:
      return state;
  }
};
export default todoReducer;
