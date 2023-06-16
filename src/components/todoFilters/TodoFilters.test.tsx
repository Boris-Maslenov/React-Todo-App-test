import {render, screen} from '@testing-library/react';
import {TodoFilters} from './';

describe("TodoClear Component", () => {
    test("render component", () => {
        render(<TodoFilters />);
        expect(screen.getByLabelText('All')).toBeInTheDocument();
        expect(screen.getByLabelText('Active')).toBeInTheDocument();
        expect(screen.getByLabelText('Completed')).toBeInTheDocument();
    })
})