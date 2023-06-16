import {render, screen} from '@testing-library/react';
import {TodoClear} from './';

describe("TodoClear Component", () => {
    test("render component", () => {
        render(<TodoClear />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})