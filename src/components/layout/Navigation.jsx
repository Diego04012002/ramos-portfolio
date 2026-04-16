import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">RAMOS</span>
        </div>

        <div className="nav-menu">
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('hero')}
          >
            Inicio
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('albums')}
          >
            Álbumes
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('tracks')}
          >
            Tracks
          </button>
          <button 
            className="nav-link" 
            onClick={() => scrollToSection('identity')}
          >
            Sobre
          </button>
        </div>

        <div className="nav-accent"></div>
      </div>
    </nav>
  );
};

export default Navigation;
