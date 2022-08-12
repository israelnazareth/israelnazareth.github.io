import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="navbar-content">
        <div className="name">Israel Nazareth</div>
        <div className="navlinks">
          <div className="navlink-projects">Projetos</div>
          <div className="navlink-techs">Tecnologias</div>
        </div>
        <button className="contact-button">Contato</button>
      </div>
    </div>
  )
}

export default Navbar
