import React from 'react';
import './AboutCard.css';

const AboutCard = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-wrapper">
        <div className="about-header">
          <h2 className="about-title font-fantasy">
            <i className="fas fa-mask icon-yellow"></i>
            Sobre Obscuro Inc.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Fundada no sombrio ano de 2025, a Obscuro Inc. surgiu dos pesadelos coletivos de artistas, escritores e desenvolvedores obcecados por fantasia.
            </p>
            <p>
              Nos especializamos em criar experiências imersivas que misturam RPG's clássicos, horror gótico, fantasia sombria e tecnologia futurista. Nossas criações são de uso gratuito e de código aberto <i>Open Source</i>.
            </p>
            <p>
              Cada projeto segue a ideia de impermanencia, nada está concluído mesmo estando completo, tendo três possíveis fases de desenvolvimento: Lagarta - estágio inicial; Casúlo - estágio utilizável <i>MVP</i>; Mariposa - estágio completo. 
            </p>
            <div className="about-tags">
              <span>Tecnologia Futurista</span>
              <span>RPG Clássico</span>
              <span>Fantasia Sombria</span>
              <span>Ficção Científica</span>
              <span>Soluções Tecnológicas</span>
            </div>
          </div>

          <div className="about-image-block">
            <div className="blur-wrapper"></div>
            <div className="about-image-container">
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-witches-burning-a-pot-in-the-woods-image_2957114.jpg"
                alt="Obscuro Team"
                className="about-image"
              />
              <p className="about-caption">
                A equipe Obscuro no último Sabbath 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
