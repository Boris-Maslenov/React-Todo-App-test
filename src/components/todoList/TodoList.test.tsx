import {render, screen, fireEvent} from '@testing-library/react';
import { TodoList } from './TodoList';
import { TodoState } from '../../context/TodoState';

describe("TodoList Component", () => {
    test("Render list", () => {
        render(<TodoState><TodoList /></TodoState>);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
})