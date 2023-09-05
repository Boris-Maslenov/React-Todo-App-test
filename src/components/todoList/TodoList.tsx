import { useContext, useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { TodoContext } from '../../context/TodoContext';
import { TodoItemBase, TodoItemEdit } from '../todoItem/';

export const TodoList = () => {
    const { dispatch } = useContext(TodoContext);
    const [count, setCount] = useState(0);
    const { state } = useContext(TodoContext);
    // Fix:
    useEffect(()=>{
        const activeTodos = state.todos.filter(({completed})=> !completed);
        const countActiveTodos = activeTodos.length;
        setCount(countActiveTodos);
    },[state]);

    const handleComplete = (id: string) => {
        dispatch({ 
            type: 'TODO_COMPLETE',
            payload: id
        })  
    }

    const handleRemove = (id: string) => {
        dispatch({
            type: 'TODO_REMOVE',
            payload: id
        })
    }

    const handleEdit = (id: string) => {
        dispatch({
            type: 'TODO_EDIT',
            payload: id
        })
    }

    const handleUpdate = (id:string, value:string) => {
        if (value.trim()){
            // Обновляем данные
            dispatch({
                type: "TODO_UPDATE",
                payload: { id, value },
            });
        }
        dispatch({
            type: "TODO_EDIT",
            payload:  id ,
        });
      };

    return (
        <Container>
            <h3>{count ? `Todos free: ${count}` : 'No todos free'}</h3>
            <ListGroup role="list">
                {
                    state.todos.filter(({completed})=> state.activeFilter === "all" ? true :
                        state.activeFilter === "completed" ?
                        completed :
                        !completed)
                       .map((todo) => todo.show && (
                        <ListGroup.Item  
                            className='d-flex align-items-center'
                            key={todo.id}
                          >
                            {
                                !todo.edit ? 
                                    <TodoItemBase {...todo } handleComplete={handleComplete}  handleRemove={handleRemove} handleEdit={handleEdit} /> :
                                    <TodoItemEdit {...todo} handleUpdate={handleUpdate} handleEdit={handleEdit} />                                 
                            }
                            
                        </ListGroup.Item>
                        )
                    )     
                }
            </ListGroup>
        </Container>
    )
}