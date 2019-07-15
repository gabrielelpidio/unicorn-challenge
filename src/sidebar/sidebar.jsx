import React from 'react';
import './sidebar.css';
import instagram from '../assets/icons/instagram.png';
import twitter from '../assets/icons/twitter.png';
import youtube from '../assets/icons/youtube.png';
import whatsapp from '../assets/icons/whatsapp.png';
import logo from '../assets/icons/unicorn.png';
import AnimatedAnchor from '../animatedAnchor/animatedAnchor';

const Sidebar = () => {
  const logoStyle = {
    marginTop: 24,
  };

  return (
    <div className="sidebar">
      <AnimatedAnchor className="logo" href="#start">
        <img src={logo} alt="logo" style={logoStyle} />
      </AnimatedAnchor>
      <div className="contact">
        <AnimatedAnchor className="contact-link" href="https://instagram.com/gab.elpidio">
          <img src={instagram} alt="instagram" />
        </AnimatedAnchor>
        <AnimatedAnchor className="contact-link" href="https://twitter.com/GabrielElpidio">
          <img src={twitter} alt="twitter" />
        </AnimatedAnchor>
        <AnimatedAnchor className="contact-link" href="https://youtube.com">
          <img src={youtube} alt="youtube" />
        </AnimatedAnchor>
        <AnimatedAnchor className="contact-link" href="https://whatsapp.com">
          <img src={whatsapp} alt="whatsapp" />
        </AnimatedAnchor>
      </div>
    </div>
  );
};

export default Sidebar;
