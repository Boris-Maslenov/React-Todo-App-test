import {render, screen} from '@testing-library/react';
import {TodoClear} from './';
import { TodoState } from '../../context/TodoState';

describe("TodoClear Component", () => {
    test("render component", () => {
        const {getByRole} = render(<TodoState><TodoClear /></TodoState>);
        expect(getByRole('button')).toBeInTheDocument();
    });
})