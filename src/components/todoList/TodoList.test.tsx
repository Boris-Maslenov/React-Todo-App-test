import {render, screen} from '@testing-library/react';
import { TodoList } from './TodoList';
import { TodoState } from '../../context/TodoState';

describe("TodoList Component", () => {
    test("list", () => {
        render(<TodoState><TodoList /></TodoState>);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
})