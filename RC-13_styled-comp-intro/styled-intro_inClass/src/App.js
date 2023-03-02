import { Button, FS13Button } from "./components/Button.styled";

const App = () => {
  return (
    <>
      <h1>Styled Components</h1>
      <Button>Send</Button>
      <Button primary>Close</Button>
      <FS13Button react>STUDY</FS13Button>
      <FS13Button>REST</FS13Button>
    </>
  );
};

export default App;
