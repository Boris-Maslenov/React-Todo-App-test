import {render, screen} from '@testing-library/react';
import App from './App';

describe("App Component", () => {
    test("render component", () => {
        render(<App />);
        expect(screen.getByText("React Todo App (with react context)")).toBeInTheDocument();
    })
})