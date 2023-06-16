import {render, screen} from '@testing-library/react';
import {TodoItemBase} from './';
import { ITodo } from '../../context/TodoState';

const props:ITodo = {id: '1', completed: false, text: 'react', edit: false, show: true}

describe("TodoItemBase Component", () => {
    test("render component", () => {
        render(<TodoItemBase {...props} />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).not.toBeDisabled();
    })
})