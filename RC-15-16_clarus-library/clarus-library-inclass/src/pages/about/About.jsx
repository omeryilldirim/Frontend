import React from 'react'
import { AboutContainer, IconContainer, InfoContainer, ProfileImg } from './About.style'
import profile from "../../assets/about.png"

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} alt="anthony" />
      <InfoContainer>
        <h2>Hi, I'm Anthony</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, NextJs, ReactNative, Django, NodeJS,
          MongoDB,SQL, Python, AWS Services.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
      </InfoContainer>
      <IconContainer>

      </IconContainer>
    </AboutContainer>
  )
}

export default About