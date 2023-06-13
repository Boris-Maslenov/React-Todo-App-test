import { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Container, Form as TodoForm, Button } from 'react-bootstrap'
import { nanoid } from "nanoid";

import { ITodo } from "../context/TodoState";

export const Form = () => {
    const [text, setText] = useState('');
    const { dispatch } = useContext(TodoContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newTodo: ITodo = {
            id: nanoid(5),
            text,
            completed: false,
            edit: false,
            show: true
          }
          dispatch({type: 'TODO_ADD', payload: newTodo});
          setText('');
    }

    return(
        <Container className='mt-4'>
            <h3>Enter todo text</h3>
            <TodoForm className='d-flex' onSubmit={handleSubmit}>
                <TodoForm.Control
                    type='text'
                    placeholder='Text...'
                    value={text}
                    onChange={handleChange}
                />
                <Button variant='primary' type='submit'>
                    Add todo
                </Button>
            </TodoForm>
      </Container>
    )

}