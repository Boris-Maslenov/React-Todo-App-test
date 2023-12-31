import { useState, useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import { Container, Form as TodoForm, Button, Row, Stack, Col } from 'react-bootstrap'
import { v4 as uuidv4 } from "uuid";
import { ITodo } from "../../context/TodoState";

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
            id: uuidv4(),
            text,
            completed: false,
            edit: false,
            show: true
          }
          dispatch({type: 'todo/add', payload: newTodo});
          setText('');
    }

    return(
        <Container className='mt-4'>
            <h3>Enter todo text</h3>
            <TodoForm  onSubmit={handleSubmit} style={{'width': '100%'}}>
                <Row>
                    <Col md={8}>
                    <TodoForm.Control
                                style={{'height': "70px"}}
                                type='text'
                                placeholder='Text...'
                                value={text}
                                onChange={handleChange}
                    />
                    </Col>
                    <Col md={4}>
                        <Button
                            variant='primary'
                            type='submit'
                            style={{'height': "70px", "width": "100%"}}>
                            Add todo
                        </Button>   
                    </Col>
                </Row>
            </TodoForm>
      </Container>
    )
}