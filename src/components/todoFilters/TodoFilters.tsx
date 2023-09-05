import { useContext } from 'react'
import { Container, Form } from 'react-bootstrap'
import { TodoContext } from '../../context/TodoContext'

export function TodoFilters() {
  const { dispatch } = useContext(TodoContext);

  const handleFilterChange = ({ target: { id } }:  React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: `filter/${id}` })
  }

  return (
    <Container className='mt-5 mb-5 text-secondary'>
      <h4>Filters</h4>
      <Form.Check
        inline
        label='All'
        type='radio'
        name='filter'
        id='all'
        onChange={handleFilterChange}
        //checked={true}
      />
      <Form.Check
        inline
        label='Active'
        type='radio'
        name='filter'
        id='active'
        onChange={handleFilterChange}
      />
      <Form.Check
        inline
        label='Completed'
        type='radio'
        name='filter'
        id='completed'
        onChange={handleFilterChange}
      />
    </Container>
  )
}
