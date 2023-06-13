import { IState } from "../context/TodoState";

export interface IAction {
  type: string;
  payload?: any;
}

export const todoReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
