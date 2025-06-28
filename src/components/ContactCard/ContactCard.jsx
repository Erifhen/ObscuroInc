import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactCard.css';

const ContactCard = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      alert('Mensagem enviada com sucesso!');
    }).catch(() => {
      alert('Falha ao enviar. Tente novamente mais tarde.');
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-header">
          <h2 className="contact-title font-fantasy">
            <i className="fas fa-envelope contact-icon" />
            Entre em contato conosco
          </h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Tem perguntas sobre nossos projetos? Quer colaborar em algo?
              Ou talvez você busque nossa mão de obra?
            </p>
            <p>
              Envie-nos uma mensagem pelos canais abaixo. Um guardião responderá antes da próxima lua cheia.
            </p>

            <div className="contact-lines">
              <div><i className="fas fa-map-marker-alt" />Bolsão, Condado de Hobbiton</div>
              <div><i className="fas fa-envelope" />erfcastro98@gmail.com</div>
              <div><i className="fas fa-phone-alt" />+55 11 948270446</div>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/Erifhen"><i className="fab fa-github" /></a>
              <a href="#"><i className="fab fa-discord" /></a>
              <a href="https://www.instagram.com/rdm_corvo/"><i className="fab fa-instagram" /></a>
              <a href="https://www.linkedin.com/in/erick-ramon-ferreira-de-castro-981525170/"><i className="fab fa-linkedin" /></a>
            </div>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name">Seu nome ou apelido</label>
              <input type="text" id="name" name="from_name" required />

              <label htmlFor="email">Seu e-mail</label>
              <input type="email" id="email" name="from_email" required />

              <label htmlFor="subject">Assunto</label>
              <select id="subject" name="subject">
                <option>Proposta de Trabalho</option>
                <option>Consulta Geral</option>
                <option>Consulta de Imprensa</option>
                <option>Junte-se a Nós</option>
                <option>Outro assunto</option>
              </select>

              <label htmlFor="message">Escreva sua mensagem!</label>
              <textarea id="message" name="message" rows="4" required />

              <button type="submit">Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
