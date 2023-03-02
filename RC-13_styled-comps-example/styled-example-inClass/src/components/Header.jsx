import Button from "./styled/Button";
import Flex from "./styled/Flex";
import Image from "./styled/Image";
import Nav from "./styled/Nav";

const Header = () => {
  return (
    <div>
      <Nav>
        <div>
          <img src="./images/logo.png" alt="logo" width={"300px"} />
        </div>

        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk To Advisor</Button>
        </div>
      </Nav>
      <Flex>
        <div>
          <h1>The IT Career of Your Dream Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp.Join a micro
            class online with other trainees and learn coding skills with
            highly-skilled instructors.
          </p>
          <Button bg="#A62440">Start Your New Career</Button>
        </div>
        <Image src="./images/hero.jpg" />
      </Flex>
    </div>
  );
};

export default Header;
