import * as React from 'react';
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { ITodo } from '../../../context/TodoState';
import { FaAngleDown, FaRegTimesCircle } from "react-icons/fa";

interface ITodoItemEditProps extends  ITodo{
  handleUpdate: (id:string, value: string)=>void,
  handleEdit: (id:string)=>void
}

export const TodoItemEdit:React.FC<ITodoItemEditProps> = ({id, text, handleUpdate, handleEdit}) => {
     const [value, setValue] = React.useState(text);
     return(
        <>
          <Form.Control value={value} onChange={(e)=>setValue(e.target.value)} type="text" data-id={id} />
          <ButtonGroup>
            <Button
              variant="none"
              className="text-success"
              onClick={()=>handleUpdate(id, value)}
            >
              <FaAngleDown size="2.0em" />
            </Button>
            <Button
              variant="none"
              className="text-danger"
              onClick={()=>handleEdit(id)}
            >
              <FaRegTimesCircle size="2.0em" />
            </Button>
          </ButtonGroup>
        </>
     )
}