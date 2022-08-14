import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaNpm, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiRedux } from 'react-icons/si';
import './Techs.css'

const Techs = () => {
  return (
    <div className="techs" id="techs">
      <div className="techs-container">
        <div className="techs-data">
          <FaReact />
          <SiRedux />
          <h1 className="techs-name">React e Redux</h1>
        </div>
        <div className="techs-data">
          <FaHtml5 />
          <FaCss3Alt />
          <h1 className="techs-name">Html e Css</h1>
        </div>
        <div className="techs-data">
          <FaJs />
          <FaBootstrap />
          <h1 className="techs-name">Javascript e Bootstrap</h1>
        </div>
        <div className="techs-data">
          <FaGitAlt />
          <FaGithub />
          <h1 className="techs-name">Git e GitHub</h1>
        </div>
        <div className="techs-data">
          <FaNpm />
          <FaNodeJs />
          <h1 className="techs-name">Npm e Node.js</h1>
        </div>
        <div className="techs-data">
          <SiMysql />
          <SiMongodb />
          <h1 className="techs-name">MySQL e MongoDB</h1>
        </div>
      </div>
    </div>
  )
}

export default Techs;
