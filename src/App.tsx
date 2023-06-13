import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { TodoState } from "./context/TodoState";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <Container>
      <TodoState>
        <div className="App">
          <h1>React Todo Ap</h1>
        </div>
        <Form />
    <TodoList />
      </TodoState>
    </Container>

  );
}

export default App;
