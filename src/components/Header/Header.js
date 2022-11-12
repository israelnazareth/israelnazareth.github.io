import './Header.css';
import dayjs from 'dayjs';

const Header = () => {
  const bDay = dayjs('1992-10-27')
  const now = dayjs()

  const yearsOld = now.diff(bDay, 'year')

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">Olá! Meu nome é Israel.</h1>
        <p className="paragraph">
          Tenho {yearsOld} anos, moro no Rio de Janeiro, sou Desenvolvedor Web, apaixonado por tecnologia, computadores, iniciativas que causem impacto positivo na vida das pessoas de forma inovadora e amante da música.
        </p>
      </div>
    </header>
  )
}

export default Header;
