import { useNavigate } from "react-router-dom";
import home from "../../assets/home.svg";
import mail from "../../assets/mail.svg";
import meal from "../../assets/meal.svg";
import meal2 from "../../assets/meal2.svg";
import { Form, LoginDiv, LoginPage } from "./Style";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <LoginPage>
      <LoginDiv>
        {/* <img width="100px" src={home} alt="" />
        <img width="100px" src={mail} alt="" />
        <img width="100px" src={meal} alt="" /> */}
        <img width="100px" src={meal2} alt="" />
        <h1>{"<mryldrm />"} RECIPE </h1>
        <Form onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="USERNAME"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
          />
          <button type="submit">LOGIN</button>
        </Form>
      </LoginDiv>
    </LoginPage>
  );
};

export default Login;
