import React from "react";
import { IState } from "./TodoState";
import { IAction } from "../reducer/todoReducer";

interface IContext {
    state: IState,
    dispatch: React.Dispatch<IAction>
}

export const TodoContext = React.createContext<IContext>({} as IContext);
