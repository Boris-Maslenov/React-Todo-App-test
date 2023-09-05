import {render, screen, fireEvent} from '@testing-library/react';
import {TodoClear} from './';
import { TodoState } from '../../context/TodoState';

describe("TodoClear Component", () => {
    test("render component", () => {
        const {getByRole} = render(<TodoState><TodoClear /></TodoState>);
        expect(getByRole('button')).toBeInTheDocument();
    });
    test("Click Button", async () => {
        render(<TodoState><TodoClear /></TodoState>)
        expect(screen.getByRole('button')).toBeEnabled();
        fireEvent.click(screen.getByRole('button'), {})
        expect( await screen.findByRole('button')).not.toBeEnabled();
    });
})