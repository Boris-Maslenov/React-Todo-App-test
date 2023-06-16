import {render, screen} from '@testing-library/react';
import {TodoItemEdit} from './';
import { ITodo } from '../../context/TodoState';

const props:ITodo = {id: '1', completed: false, text: 'react', edit: false, show: true}
const t = props.text

describe("TodoItemEdit Component", () => {
    test("render component", () => {
        render(<TodoItemEdit {...props} />);
        expect(screen.getByDisplayValue(t)).toBeInTheDocument();
    });
})