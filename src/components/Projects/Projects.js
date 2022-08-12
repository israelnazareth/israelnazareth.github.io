import projectsData from './projectsData.json';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects-container">
        {projectsData.map(({ img, title, description, pageURL, githubURL }) => (
          <div className="project">
            <div class="project-content">
              <a href={pageURL} target="blank">
                <img src={img} alt={title} />
              </a>
              <h1 className="project-title">{title}</h1>
              <p className="project-description">{description}</p>
            </div>
            <div className="buttons-container">
              <a href={pageURL} target="blank">
                <button className="button-left">Ver aplicação</button>
              </a>
              <a href={githubURL} target="blank">
                <button className="button-right">Ver código</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
