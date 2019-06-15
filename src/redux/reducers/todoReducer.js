import {UPDATE_VALUE} from "../actions/actionTypes";
import {SAVE_TODO} from "../actions/actionTypes";
import {DELETE_TODO} from "../actions/actionTypes";
import {TOGGLE_COMPLETED} from "../actions/actionTypes";

const INITIAL_STATE = {
  value: "",
  todos: []
}

export default (state= INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload
      };
    case SAVE_TODO:
      return state.value
        ? {
          ...state,
          value: "",
          todos: [
            ...state.todos,
            {
              value: state.value,
              complete: false
            }
          ]
        }
        : state;
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i != action.payload)
      };
    case TOGGLE_COMPLETED:
      const todos = state.todos;
      todos[action.payload].completed = !todos[action.payload].completed;
      return {
        ...state,
        todos
      };
    default:
      return state;
  }
};
