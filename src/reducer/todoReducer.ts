import { IState } from "../context/TodoState";

export interface IAction {
  type: string;
  payload?: any;
}

export const todoReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "TODO_ADD":
      console.log("ADD_TODO");
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TODO_COMPLETE":
      const findId = action.payload;
      const todos = state.todos.concat();
      const index = todos.findIndex(({ id }) => id === findId);
      todos[index].completed = !todos[index].completed;
      return {
        ...state,
        todos,
      };
    case "TODO_REMOVE":
      return {
        ...state,
        todos: [...state.todos.filter(({ id }) => id !== action.payload)],
      };
    default:
      return state;
  }
};
