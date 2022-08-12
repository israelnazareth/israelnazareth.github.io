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
        <button className="contact-button">Contato</button>
      </div>
    </div>
  )
}

export default Navbar
