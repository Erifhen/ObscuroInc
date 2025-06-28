import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-gradient">Criando Fantasias Sombrias</span>
        </h1>
        <p className="hero-subtitle">
          Onde a imaginação se faz realidade
        </p>
        <div className="hero-buttons">
          <a href="#games" className="btn-primary">
            Explore nosso trabalho
          </a>
          <a href="#contact" className="btn-outline">
            Contate nossa equipe
          </a>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </header>
  );
};

export default Header;
