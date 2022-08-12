import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="project">
          <img src={p1} alt="Project 1"></img>
          <h1 className="project-title">Spence.com</h1>
          <p  className="project-description">
            Rethinking the way writers get paid, an open source plataform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc
          </p>
        </div>

        <div className="project">
          <img src={p2} alt="Project 1"></img>
          <h1 className="project-title">YelpCamp.com</h1>
          <p  className="project-description">
            Allowing backpack travelers to perfectly plan their trip through an open-source plataform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowds favorite in 2021.
          </p>
        </div>

        <div className="project">
          <img src={p1} alt="Project 1"></img>
          <h1 className="project-title">Spence.com</h1>
          <p  className="project-description">
            Rethinking the way writers get paid, an open source plataform designed to help writers focus more on writing, and less on when and how they'll get paid. Project in collaboration with Codewell.cc
          </p>
        </div>

        <div className="project">
          <img src={p2} alt="Project 1"></img>
          <h1 className="project-title">YelpCamp.com</h1>
          <p  className="project-description">
            Allowing backpack travelers to perfectly plan their trip through an open-source plataform similar to TripAdvisor. With over 1m MAU, YelpCamp has been the crowds favorite in 2021.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
