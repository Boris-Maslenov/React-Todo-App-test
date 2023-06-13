import { IState } from "../context/TodoState";

interface IAction {
  type: string;
  payload: any;
}

export const todoReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
