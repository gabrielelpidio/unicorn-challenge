import React from 'react';
import { useMediaQuery } from 'react-responsive';

import AnimatedAnchor from '../animatedAnchor/animatedAnchor';

import './header.css';
import image from '../assets/icons/image.png';
import logo from '../assets/icons/unicorn.png';

const Header = ({ visibleMenu }) => {

  const logoStyle = {
    justifySelf: 'end',
  };

  const centeredHeader = useMediaQuery({
    query: '(max-width: 735px)',
  });

  if (centeredHeader) {
    return (
      <div className="header">
        <h1 className="header-title">Unicornio Web Profesional</h1>
        <div className="hero">
          <img src={image} alt="" className="hero-image" />
        </div>
        <div className="header-logo" href="#start" style={logoStyle}>
          <img src={logo} alt="logo" />
        </div>
      </div>
    );
  }
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">Unicornio Web Profesional</h1>
      </div>
      <div className="header-right">
        {!visibleMenu ? (
          <nav className="navbar">
            <AnimatedAnchor className="navbar-link" href="#start">
              Inicio
            </AnimatedAnchor>
            <AnimatedAnchor className="navbar-link" href="#aboutMe">
              Sobre mí
            </AnimatedAnchor>
            <AnimatedAnchor className="navbar-link" href="#portfolio">
              Portfolio
            </AnimatedAnchor>
          </nav>
        ) : (
          <div className="header-logo" href="#start" style={logoStyle}>
            <img src={logo} alt="logo" />
          </div>
        )}
        <div className="hero">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
