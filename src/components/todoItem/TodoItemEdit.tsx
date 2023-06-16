import * as React from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { ITodo } from '../../context/TodoState';

import { BsCheckCircle } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

export const TodoItemEdit:React.FC<ITodo> = ({id, text}) => {
     const { dispatch } = React.useContext(TodoContext);
     const [value, setValue] = React.useState(text);

     const handleUpdate = () => {
          if (value.trim())
            dispatch({
              type: "TODO_UPDATE",
              payload: { id, value },
            });

            dispatch({
               type: "TODO_EDIT",
               payload:  id ,
             });
        };

     const handleEdit = () => {
          dispatch({
               type: "TODO_EDIT",
               payload: id ,
          });
     }   

     return(
        <>
          <Form.Control value={value} onChange={(e)=>setValue(e.target.value)} type="text" data-id={id} />
          <ButtonGroup>
            <Button
              variant="none"
              className="text-success"
              onClick={handleUpdate}
            >
              <BsCheckCircle size="2.0em" />
            </Button>
            <Button
              variant="none"
              className="text-danger"
              onClick={handleEdit}
            >
              <FcCancel size="2.0em" />
            </Button>
          </ButtonGroup>
        </>
     )
}