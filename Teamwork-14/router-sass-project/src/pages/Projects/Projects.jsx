import "./Projects.scss"
import {imageData} from "../../helper/imageData.js"

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="title-container">
        <h1 className="title">My Projects</h1>
      </div>
      <div className="projects-items">
        {imageData.map((item,i) => (
                  <div key={i+1} className="projects-item">
                    <img className="project-image" src={item.image} alt="My Project" />
                  </div>
        ))}
      </div>
    </div>
  )
}

export default Projects