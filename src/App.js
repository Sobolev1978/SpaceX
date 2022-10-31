import Header from "./components/header/Header";
import Container from "./components/container/Container";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import MainBlock from "./components/main-block/MainBlock";


function App() {
  return (
    <Router>
      <Header/>
      <Container>
        <MainBlock />
      </Container>
    </Router>
  );
}

export default App;
