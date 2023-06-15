import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { TodoState } from "./context/TodoState";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { TodoFilters } from "./components/TodoFilters";
import { TodoClear } from "./components/TodoClear";

function App() {
  return (
      <Container>
        <div className="App">
          <h1>React Todo App (with react context)</h1>
        </div>
        <TodoState>
          <Form />
          <TodoList />
          <TodoFilters />
          <TodoClear />
        </TodoState>
    </Container>
  );
}

export default App;
