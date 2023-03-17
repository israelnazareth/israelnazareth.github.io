import { useState } from 'react';
import './Contact.css'

const Contact = () => {
  const [message, setMessage] = useState('');

  function validateField(e, message) {
    e.target.setCustomValidity(message)
  }

  return (
    <div data-aos="fade-in" className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-title">Tem interesse em trabalhar comigo?</h1>
        <p className="contact-paragraph">
          Me mande uma mensagem através do formulário abaixo! Eu também estou presente no LinkedIn e no Whatsapp listados no rodapé.
        </p>
        <form onSubmit={() => { }} method="post">
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              placeholder="Nome"
              onInvalid={e => validateField(e, 'Insira o seu nome')}
              onInput={e => validateField(e, '')}
              title="Insira o seu nome"
              required
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onInvalid={e => validateField(e, 'Insira um email válido')}
              onInput={e => validateField(e, '')}
              title="Insira um email válido"
              required
            />
          </label>
          <label htmlFor="message">
            <textarea
              id="message"
              cols="30"
              rows="10"
              maxLength="500"
              placeholder="Mensagem"
              onInvalid={e => validateField(e, 'Escreva a sua mensagem')}
              onInput={e => validateField(e, '')}
              onChange={e => setMessage(e.target.value)}
              title="Escreva a sua mensagem"
              required
            />
            <p className="chars-counter">{message.length}/500</p>
          </label>
          <button className="email-button" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
