import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="navbar-content">
        <a href="/" className="name">Israel Nazareth</a>
        <div className="navlinks">
          <a className="navlink-projects" href="#projects">Projetos</a>
          <a className="navlink-techs" href="#techs">Tecnologias</a>
        </div>
        <a href="#contact">
          <button className="contact-button">Contato</button>
        </a>
      </div>
    </div>
  )
}

export default Navbar
