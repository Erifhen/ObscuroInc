import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <div className="logoBox">
            <h1 className="logoText">Obscuro Inc.</h1>
          </div>
        </div>

        <div className="mobileButton">
          <button onClick={toggleMobileMenu} className="menuToggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="desktopMenu">
          <a href="#apps" className="navLink">Aplicativos</a>
          <a href="#games" className="navLink">Jogos</a>
          <a href="#books" className="navLink">Livros</a>
          <a href="#about" className="navLink">Sobre</a>
          <a href="#contact" className="navLink">Contato</a>
        </div>
      </div>

      {isMobileOpen && (
        <div className="mobileMenu">
          <a href="#apps" className="mobileLink">Aplicativos</a>
          <a href="#games" className="mobileLink">Jogos</a>
          <a href="#books" className="mobileLink">Livros</a>
          <a href="#about" className="mobileLink">Sobre</a>
          <a href="#contact" className="mobileLink">Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

