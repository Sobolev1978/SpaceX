import Header from "./components/header/Header";
import Container from "./components/container/Container";
import {HashRouter} from "react-router-dom";
import MainBlock from "./components/main-block/MainBlock";


function App() {
  return (
    <HashRouter>
      <Header/>
      <Container>
        <MainBlock/>
      </Container>
    </HashRouter>
  );
}

export default App;
