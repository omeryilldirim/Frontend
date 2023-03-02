import Header from "./components/Header";
import Container from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";


const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Container>
        <Header/>
      </Container>
    </>
  );
};

export default App;
