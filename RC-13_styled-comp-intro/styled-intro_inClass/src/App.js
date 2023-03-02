import { Button, FS13Button } from "./components/Button.styled";
import HeaderText from "./components/HeaderText.styled"
import Sarmal from "./components/Sarmal";

const App = () => {
  return (
    <Sarmal bg="#bebe">
      <HeaderText color="hotpink">Styled Components</HeaderText>
      <HeaderText color="#734586" bgcolor="#eee" >Styled Components</HeaderText>
      <Button>Send</Button>
      <Button primary>Close</Button>
      <FS13Button react>STUDY</FS13Button>
      <FS13Button>REST</FS13Button>
    </Sarmal>
  );
};

export default App;
