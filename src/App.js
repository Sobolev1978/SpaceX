import Header from "./components/header/Header";
import Container from "./components/container/Container";
import MainBlock from "./components/main-block/MainBlock";


function App() {
  return (
    <div>
      <Header/>
      <Container>
        <MainBlock/>
      </Container>
    </div>
  );
}

export default App;
