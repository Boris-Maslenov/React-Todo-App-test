import { IState } from "../context/TodoState";

export interface IAction {
  type: string;
  payload?: any;
}

export const todoReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "todo/add":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "todo/complete":
      const findId = action.payload;
      const todos = state.todos.concat();
      const index = todos.findIndex(({ id }) => id === findId);
      todos[index].completed = !todos[index].completed;
      return {
        ...state,
        todos,
      };
    case "todo/edit": {
      const findId = action.payload;
      const todos = state.todos.concat();
      const index = todos.findIndex(({ id }) => id === findId);
      todos[index].edit = !todos[index].edit;
      return {
        ...state,
        todos,
      };
    }
    case "todo/update": {
      const { id: findId, value } = action.payload;
      const todos = state.todos.concat();
      const index = todos.findIndex(({ id }) => id === findId);
      todos[index].text = value;
      return {
        ...state,
        todos,
      };
    }
    case "todo/remove":
      return {
        ...state,
        todos: [...state.todos.filter(({ id }) => id !== action.payload)],
      };
    case "todo/clear":
      return {
        ...state,
        todos: [],
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
