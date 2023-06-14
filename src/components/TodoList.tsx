import { useContext } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

import { TodoItemBase } from './TodoItemBase';
import { TodoItemEdit } from './TodoItemEdit';

export const TodoList = () => {
    const { state } = useContext(TodoContext);
    return (
        <Container>
            <ListGroup>
                {
                    state.todos.filter(({completed})=> state.activeFilter === "all" ? true :
                        state.activeFilter === "completed" ?
                        completed :
                        !completed)
                       .map((todo, index) => todo.show && (
                        <ListGroup.Item  
                            className='d-flex align-items-center'
                            key={todo.id}
                          >
                            {
                                !todo.edit ? 
                                    <TodoItemBase {...todo} /> :
                                    <TodoItemEdit {...todo} />                                 
                            }
                            
                        </ListGroup.Item>
                        )
                    )     
                }
            </ListGroup>
        </Container>
    )
}