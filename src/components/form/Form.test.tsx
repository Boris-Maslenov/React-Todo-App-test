import {render, screen, fireEvent} from '@testing-library/react';
import {Form} from './';
import { TodoState } from '../../context/TodoState';

describe("Form Component", () => {
    test("Render Form", () => {
        render(<Form />);
        expect(screen.getByPlaceholderText(/Text/)).toBeInTheDocument();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
    test("Text input", async() => {
        render(<TodoState><Form/></TodoState>); 
        await screen.findByPlaceholderText(/Text.../);
        expect(screen.getByPlaceholderText(/Text.../)).toHaveValue('');
        //screen.debug();
        fireEvent.change(screen.getByPlaceholderText(/Text.../), {target: { value: "new todo" }})
        expect(await screen.findByPlaceholderText(/Text.../)).toHaveValue('new todo');
        //screen.debug();
        fireEvent.change(screen.getByPlaceholderText(/Text.../), {target: { value: "" }})
        expect(await screen.findByPlaceholderText(/Text.../)).toHaveValue('');
    })
    test("Button click end clear text input", async ()=>{
        render(<TodoState><Form/></TodoState>);
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Text.../)).toBeInTheDocument();
        fireEvent.change(screen.getByPlaceholderText(/Text.../), {target: { value: "new todo" }})
        expect(await screen.findByPlaceholderText(/Text.../)).toHaveValue('new todo');
        fireEvent.click(screen.getByRole('button'), {})
        expect(await screen.findByPlaceholderText(/Text.../)).toHaveValue('');
    });
});