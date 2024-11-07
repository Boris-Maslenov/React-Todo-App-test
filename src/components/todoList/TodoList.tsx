import { useContext, useCallback } from "react";
import { Container, ListGroup } from "react-bootstrap";
import { TodoContext } from "../../context/TodoContext";
import { TodoItemBase, TodoItemEdit } from "./todoItem";

export const TodoList = () => {
  const { dispatch, state } = useContext(TodoContext);
  const freeCount = state.todos.filter(({ completed }) => !completed).length;

  const handleComplete = useCallback((id: string) => {
    dispatch({
      type: "todo/complete",
      payload: id,
    });
  }, []);

  const handleRemove = (id: string) => {
    dispatch({
      type: "todo/remove",
      payload: id,
    });
  };

  const handleEdit = useCallback((id: string) => {
    dispatch({
      type: "todo/edit",
      payload: id,
    });
  }, []);

  const handleUpdate = useCallback((id: string, value: string) => {
    if (value.trim()) {
      dispatch({
        type: "todo/update",
        payload: { id, value },
      });
    }

    dispatch({
      type: "todo/edit",
      payload: id,
    });
  }, []);

  return (
    <Container>
      <h3>{freeCount > 0 ? `Todos free: ${freeCount}` : "No todos free"}</h3>
      <ListGroup role="list">
        {state.todos
          .filter(({ completed }) =>
            state.activeFilter === "all"
              ? true
              : state.activeFilter === "completed"
              ? completed
              : !completed
          )
          .map(
            (todo) =>
              todo.show && (
                <ListGroup.Item
                  className="d-flex align-items-center"
                  key={todo.id}
                >
                  {!todo.edit ? (
                    <TodoItemBase
                      {...todo}
                      handleComplete={handleComplete}
                      handleRemove={handleRemove}
                      handleEdit={handleEdit}
                    />
                  ) : (
                    <TodoItemEdit
                      {...todo}
                      handleUpdate={handleUpdate}
                      handleEdit={handleEdit}
                    />
                  )}
                </ListGroup.Item>
              )
          )}
      </ListGroup>
    </Container>
  );
};
