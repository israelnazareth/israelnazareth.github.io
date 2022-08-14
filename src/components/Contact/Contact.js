import './Contact.css'

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Tem interesse em trabalhar comigo?</h1>
        <p className="contact-paragraph">Eu estou nas redes sociais listadas no rodapé mas você também pode me enviar um email que eu responderei dentro de 48 horas.</p>
        <a href='mailto:israel.fab@hotmail.com' className="link-button">
          <button className="email-button">Contato</button>
        </a>
      </div>
    </div>
  )
}

export default Contact;
