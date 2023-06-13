import { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

export const TodoList = () => {
    const { state } = useContext(TodoContext);
    return (
        <Container>
            <ListGroup>
                {
                    state.todos.map((todo, index) =>  <ListGroup.Item  className='d-flex align-items-center' key={todo.id} >{todo.text}</ListGroup.Item>)
                }
            </ListGroup>
        </Container>
    )
}