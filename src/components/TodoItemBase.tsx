import * as React from 'react';
import { TodoContext } from '../context/TodoContext';
import { Form, ButtonGroup, Button } from 'react-bootstrap';


import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

import { ITodo } from '../context/TodoState';

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
            <Form.Check checked={completed} onChange={(e) => handleComplete(id)} />
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
                variant='none'
                className='text-info'
                onClick={() => handleEdit(id)}
                disabled={completed}
                >
                <FiEdit2 size='2.0em' />
                </Button>
                <Button
                    variant='none'
                    className='text-danger'
                    onClick={() => handleRemove(id)}
                >
                    <AiOutlineDelete size='2.0em' />
                </Button>
            </ButtonGroup>
        </>
    )
}