import { IState } from "../context/TodoState";

export interface IAction {
  type: string;
  payload?: any;
}

export const todoReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "TODO_ADD":
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
    case "TODO_EDIT": {
      const findId = action.payload;
      const todos = state.todos.concat();
      const index = todos.findIndex(({ id }) => id === findId);
      todos[index].edit = !todos[index].edit;
      return {
        ...state,
        todos,
      };
    }
    case "TODO_UPDATE": {
      const { id: findId, value } = action.payload;
      const todos = state.todos.concat();
      const index = todos.findIndex(({ id }) => id === findId);
      todos[index].text = value;
      return {
        ...state,
        todos,
      };
    }
    case "TODO_REMOVE":
      return {
        ...state,
        todos: [...state.todos.filter(({ id }) => id !== action.payload)],
      };

    case "filter/all":
      return {
        ...state,
        activeFilter: "all",
      };
    case "filter/active":
      return {
        ...state,
        activeFilter: "active",
      };
    case "filter/completed":
      return {
        ...state,
        activeFilter: "completed",
      };
    default:
      return state;
  }
};
