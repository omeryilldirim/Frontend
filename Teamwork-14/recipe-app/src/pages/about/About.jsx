import coding from "../../assets/coding.svg"
import AboutSection, {TitleDiv, InfoDiv} from "./Style"

const About = () => {
  return (
    <AboutSection>
        <TitleDiv>
            <img src={coding} alt="about-img" width={"200px"} />
            <h3>Full-Stack Developer <span>omeryildirim</span></h3>
        </TitleDiv>
        <InfoDiv>
            <h4>I'm Omer</h4>
            <p>I'm currently in a Full-Stack Web Developer Bootcamp.</p>
            <p>I've already known JS and ReactJS. Recently, I am learning Pyhton and Django.</p>
            <p>Send Email : <span>omeryilldirim@outlook.com </span> </p>
        </InfoDiv>
    </AboutSection>
  )
}

export default About