import * as React from "react";
import { TodoContext } from "../../../context/TodoContext";
import { Form, ButtonGroup, Button } from "react-bootstrap";
import { FaPen, FaTrashAlt } from "react-icons/fa";

import { ITodo } from "../../../context/TodoState";

interface ITodoItemBaseProps extends ITodo {
  handleComplete: (id: string) => void;
  handleRemove: (id: string) => void;
  handleEdit: (id: string) => void;
}

export const TodoItemBase: React.FC<ITodoItemBaseProps> = ({
  id,
  text,
  completed,
  handleComplete,
  handleRemove,
  handleEdit,
}) => {
  return (
    <>
      <Form.Check
        className="p-2"
        checked={completed}
        onChange={(e) => handleComplete(id)}
      />
      <Form.Label
        className="flex-grow-1 text-left ml-3 mt-1"
        style={{
          fontSize: "1.1em",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </Form.Label>
      <ButtonGroup>
        <Button
          type="button"
          variant="none"
          className="text-info"
          onClick={() => handleEdit(id)}
          disabled={completed}
        >
          <FaPen
            size="2.0em"
            style={{
              color: completed ? "#cdcdcd" : undefined,
            }}
          />
        </Button>
        <Button
          variant="none"
          className="text-danger"
          onClick={() => handleRemove(id)}
        >
          <FaTrashAlt size="2.0em" />
        </Button>
      </ButtonGroup>
    </>
  );
};
