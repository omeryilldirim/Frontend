import { useState } from "react";
import { useNavigate } from "react-router-dom";
import meal2 from "../../assets/meal2.svg";
import { LoginForm, LoginDiv, LoginPage } from "./Style";
import users from "../../utils/users"

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleLogin = () => {
    if(username === users[0].username && password === users[0].password){
      setIsLoggedIn(true);
      navigate("/");
    } else{
      alert("Invalid username or password!")
    }

  };

  return (
    <LoginPage>
      <LoginDiv>
        <img width="100px" src={meal2} alt="" />
        <h1>{"<mryldrm />"} RECIPE </h1>
        <LoginForm onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="USERNAME"
            onChange={(e)=> setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            onChange={(e)=> setPassword(e.target.value)}
          />
          <button type="submit">LOGIN</button>
        </LoginForm>
      </LoginDiv>
    </LoginPage>
  );
};

export default Login;
