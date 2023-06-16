import * as React from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { FaPen, FaTrashAlt } from 'react-icons/fa'

import { ITodo } from '../../context/TodoState';

export const TodoItemBase:React.FC<ITodo> = ({  id, text, completed }) => {
    const { dispatch } = React.useContext(TodoContext);
    const handleComplete = (id: string) => {
            dispatch({ type: 'TODO_COMPLETE', payload: id })  
    }
    
    const handleRemove = (id: string) => {
        dispatch({ type: 'TODO_REMOVE', payload: id })
    }

    const handleEdit = (id: string) => {
        dispatch({ type: 'TODO_EDIT', payload: id })
    }

    return(
        <>
            <Form.Check className="p-2" checked={completed} onChange={(e) => handleComplete(id)} />
            <Form.Label
                className='flex-grow-1 text-left ml-3 mt-1'
                style={{
                    fontSize: '1.1em',
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </Form.Label>
            <ButtonGroup>
                <Button
                type="button"
                variant='none'
                className='text-info'
                onClick={() => handleEdit(id)}
                disabled={completed}
                >
                <FaPen size='2.0em' />
                </Button>
                <Button
                    variant='none'
                    className='text-danger'
                    onClick={() => handleRemove(id)}
                >
                    <FaTrashAlt size='2.0em' />
                </Button>
            </ButtonGroup>
        </>
    )
}