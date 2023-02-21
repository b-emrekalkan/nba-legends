import { Container } from "react-bootstrap";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header/>
      <CardContainer/>
    </Container>
  );
}

export default App;
