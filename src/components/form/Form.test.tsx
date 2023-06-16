import {render, screen} from '@testing-library/react';
import {Form} from './';

describe("Form Component", () => {
    test("render component", () => {
        render(<Form />);
        expect(screen.getByPlaceholderText(/Text/)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})