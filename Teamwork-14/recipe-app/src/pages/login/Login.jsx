import coding from "../../assets/coding.svg"
import diet from "../../assets/diet.svg"
import home from "../../assets/home.svg"
import mail from "../../assets/mail.svg"
import meal from "../../assets/meal.svg"
import meal2 from "../../assets/meal2.svg"

const Login = () => {

  return (
    <div>
        {/* <img width="100px" src={coding} alt="" />
        <img width="100px" src={diet} alt="" />
        <img width="100px" src={home} alt="" />
        <img width="100px" src={mail} alt="" />
        <img width="100px" src={meal} alt="" /> */}
        <img width="100px" src={meal2} alt="" />
        <h1>{"<mryldrm />"} RECIPE </h1>
        <form action="">
            <input type="text" name="username" id="username" placeholder="USERNAME"/>
            <br />
            <input type="password" name="password" id="password" placeholder="PASSWORD"/>
            <br />
            <button type="submit">LOGIN</button>
        </form>
    </div>
  )
}

export default Login