import {render, screen, fireEvent} from '@testing-library/react';
import {TodoFilters} from './';
import { TodoState } from '../../context/TodoState';

describe("TodoClear Component", () => {
    test("render component", () => {
        render(<TodoFilters />);
        expect(screen.getByLabelText('All')).toBeInTheDocument();
        expect(screen.getByLabelText('Active')).toBeInTheDocument();
        expect(screen.getByLabelText('Completed')).toBeInTheDocument();
    })
    test("Radio checked", async () => {
        render(<TodoState><TodoFilters /></TodoState>);
        const elements:HTMLInputElement[] = await screen.findAllByRole('radio');
            for (let radioElement of elements){
                fireEvent.click(radioElement, {})
                expect(radioElement).toBeChecked();
            } 
    })
})