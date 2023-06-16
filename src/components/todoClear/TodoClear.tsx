import {  useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import {  Stack, Button } from 'react-bootstrap'

export const TodoClear = () => {

    const {dispatch, state: {todos}} = useContext(TodoContext);

    const clearHandler = () => {
        dispatch({type: "TODO_CLEAR"});
    }

    return (
        <Stack gap={2} className="col-md-3 mx-auto pt-4 pb-4">
            <Button disabled={!todos.length} onClick={clearHandler} variant="secondary">Clear</Button>
        </Stack>
    )
}