import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div class="footer-container">
        <a href="/" className="footer-name">Israel Nazareth</a>
        <div class="socials-contact">
          <a href="https://www.linkedin.com/in/israelnazareth/" target="blank">
            <GrLinkedin />
          </a>
          <a href="https://github.com/israelnazareth" target="blank">
            <GrGithub />
          </a>
          <a href="https://www.instagram.com/rael.22/" target="blank">
            <GrInstagram />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
