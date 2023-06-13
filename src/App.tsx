import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { TodoState } from "./context/TodoState";

function App() {
  return (
    <Container>
      <TodoState>
        <div className="App">
          <h1>React Todo Ap</h1>
        </div>
      </TodoState>
    </Container>
    
  );
}

export default App;
