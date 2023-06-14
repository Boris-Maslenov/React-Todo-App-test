import { useContext, useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { TodoContext } from '../context/TodoContext';

import { TodoItemBase } from './TodoItemBase';
import { TodoItemEdit } from './TodoItemEdit';

export const TodoList = () => {
    const [count, setCount] = useState(0);
    const { state } = useContext(TodoContext);

    useEffect(()=>{
        const activeTodos = state.todos.filter(({completed})=> !completed);
        const countActiveTodos = activeTodos.length;
        setCount(countActiveTodos)
    },[state]);
    return (
        <Container>
            <h3>{count ? `Todos free: ${count}` : 'No todos free'}</h3>
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