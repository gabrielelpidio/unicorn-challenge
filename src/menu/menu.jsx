import React from 'react';
import { useSpring, a, config } from 'react-spring';
import AnimatedAnchor from '../animatedAnchor/animatedAnchor';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import youtube from '../assets/icons/youtube.png';
import whatsapp from '../assets/icons/whatsapp.png';

import './menu.css';

const Menu = ({ visible }) => {
  const show = useSpring({
    transform: `translate3d(0, ${visible ? 0 : -42}vh, 0)`,
    config: config.stiff,
  });
  return (
    <a.div className="menu card" style={show}>
      <div className="menu-navigation">
        <AnimatedAnchor className="navbar-link menu-navigation-link" href="#start">
          Inicio
        </AnimatedAnchor>
        <AnimatedAnchor className="navbar-link menu-navigation-link" href="#aboutMe">
          Sobre mí
        </AnimatedAnchor>
        <AnimatedAnchor className="navbar-link menu-navigation-link" href="#portfolio">
          Portfolio
        </AnimatedAnchor>
      </div>
      <div className="menu-contact">
        <AnimatedAnchor
          className="contact-link menu-contact-link"
          href="https://instagram.com/gab.elpidio"
        >
          <img src={instagram} alt="instagram" />
        </AnimatedAnchor>
        <AnimatedAnchor
          className="contact-link menu-contact-link"
          href="https://twitter.com/GabrielElpidio"
        >
          <img src={twitter} alt="twitter" />
        </AnimatedAnchor>
        <AnimatedAnchor className="contact-link menu-contact-link" href="https://youtube.com">
          <img src={youtube} alt="youtube" />
        </AnimatedAnchor>
        <AnimatedAnchor className="contact-link menu-contact-link" href="https://whatsapp.com">
          <img src={whatsapp} alt="whatsapp" />
        </AnimatedAnchor>
      </div>
    </a.div>
  );
};

export default Menu;
