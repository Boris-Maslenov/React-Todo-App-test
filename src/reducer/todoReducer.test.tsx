import  React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import { TodoState } from '../context/TodoState';
import { Form } from '../components/form'; 
import { TodoList } from '../components/todoList';
import { TodoClear } from '../components/todoClear';

describe("useReducer", () => {
  test("Delete todo", async() => {
    render(   <TodoState>
                  <TodoList />
              </TodoState>
    )
    expect(await screen.findAllByRole('checkbox')).toHaveLength(4)
    const deleteItemButtons = await screen.findAllByRole('button');
    const deleteItemButton = deleteItemButtons[1];
    fireEvent.click(deleteItemButton, {})
    expect(await screen.findAllByRole('checkbox')).toHaveLength(3);

  });
  test("Add todo", async() => {
    render(   <TodoState>
                   <Form />
                  <TodoList />
              </TodoState>
    )
    expect(await screen.findAllByRole('checkbox')).toHaveLength(4)
    fireEvent.change(screen.getByPlaceholderText(/Text.../), {target: { value: "new todo" }});
    fireEvent.click(await screen.findByText( 'Add todo'), {});
    expect(await screen.findAllByRole('checkbox')).toHaveLength(5);
  });
  test("Clear all items", async() => {
    render(   <TodoState>
                  <TodoList />
                  <TodoClear />
              </TodoState>
    )
    expect(await screen.findAllByRole('checkbox')).toHaveLength(4);
    fireEvent.click(screen.getByText( 'Clear'), {});
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });
  test("Update one item", async() => {
    render(   <TodoState>
                  <Form />
                  <TodoList />
                  <TodoClear />
              </TodoState>
    )
    // Изначально 4 todo
    expect(await screen.findAllByRole('checkbox')).toHaveLength(4);
    // Очистим все todo
    fireEvent.click(screen.getByText( 'Clear'), {});
    // Добавим 1 todo
    fireEvent.change(screen.getByPlaceholderText(/Text.../), {target: { value: "new test todo" }});
    fireEvent.click(await screen.findByText( 'Add todo'), {});
    expect(await screen.findAllByRole('checkbox')).toHaveLength(1);
    const controlButtons = await screen.findAllByRole('button');
    const removeButton = controlButtons[1];
    fireEvent.click(removeButton, {});
    // Поле для редактирования в документе
    expect(await screen.findByDisplayValue('new test todo')).toBeInTheDocument()
    fireEvent.click(screen.getByDisplayValue( 'new test todo'), {target: {value: "DockerCompose"}});
    // Кнопка подтвердить изменение
    const buttons = await screen.findAllByRole('button');
    const successButton = controlButtons[1];
    // Сохраняем новое значение todo
    fireEvent.click(successButton, {});
    expect(await screen.findByDisplayValue('DockerCompose')).toBeInTheDocument()
  });
});