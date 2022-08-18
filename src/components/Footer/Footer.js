import { GrGithub, GrInstagram, GrLinkedin, GrLinkTop } from 'react-icons/gr'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="socials-contact">
          <a href="https://www.linkedin.com/in/israelnazareth/" target="blank" title="LinkedIn">
            <GrLinkedin />
          </a>
          <a href="https://github.com/israelnazareth" target="blank" title="GitHub">
            <GrGithub />
          </a>
          <a href="https://www.instagram.com/rael.22/" target="blank" title="Instagram">
            <GrInstagram />
          </a>
        </div>
        <p>2022 &copy; Desenvolvido por Israel Nazareth</p>
        <a href="#home" className="button-to-top">
          <GrLinkTop title='Voltar ao topo' />
        </a>
      </div>
    </div>
  )
}

export default Footer;
