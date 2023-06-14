import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { TodoState } from "./context/TodoState";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { TodoFilters } from "./components/TodoFilters";

function App() {
  return (
    <Container>
      <TodoState>
        <div className="App">
          <h1>React Todo App (with react context)</h1>
        </div>
        <Form />
      <TodoList />
      <TodoFilters />
      </TodoState>
    </Container>
  );
}

export default App;