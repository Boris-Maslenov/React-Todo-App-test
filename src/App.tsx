import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { TodoState } from "./context/TodoState";
import { Form } from "./components/form";
import { TodoList } from "./components/todoList";
import { TodoFilters } from "./components/todoFilters";
import { TodoClear } from "./components/todoClear";

function App() {
  return (
       <Container>
        <div className="App">
          <h1>React Todo App (with react context)</h1>
        </div>
       <TodoState>
          <Form />
          <TodoFilters />
          <TodoList />
          <TodoClear />
        </TodoState>
    </Container> 
  );
}

export default App;