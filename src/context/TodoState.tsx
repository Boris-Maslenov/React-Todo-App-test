import React from "react";
import { todoReducer } from "../reducer/todoReducer";
import { TodoContext } from "./TodoContext";


export interface ITodo {
    id: string;
    text: string;
    completed: boolean;
    edit: boolean;
    show: boolean;
}

export interface IState {
  todos: ITodo[];
}

type TodoStateProps = {
  children?: React.ReactNode | React.ReactNode[];
};

const initialState: IState = {
  todos: [
    { id: "1", text: "Eat", completed: true, edit: false, show: true },
    { id: "2", text: "Sleep", completed: false, edit: false, show: true },
    { id: "3", text: "Repeat", completed: false, edit: false, show: true },
  ],
};

export function TodoState({children}: TodoStateProps){
  const [state, dispatch] = React.useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
};
