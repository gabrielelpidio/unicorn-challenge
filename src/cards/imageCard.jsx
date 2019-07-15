import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import './imageCard.css';

const ImageCard = ({ href, image, title }) => {
  const [hovered, toggle] = useState(false);

  const hover = useSpring({
    transform: hovered ? `scale(${1.05})` : `scale(${1})`,
    boxShadow: hovered
      ? '0px 8px 16px rgba(157, 168, 190, 0.5)'
      : '0px 4px 8px rgba(157, 168, 190, 0.5)',
    config: config.gentle,
  });
  const infoHover = useSpring({
    opacity: hovered ? 1 : 0,
    config: config.stiff,
  });

  return (
    <animated.a
      className="ImageCard-wrapper card"
      style={hover}
      onMouseOver={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      onFocus={() => toggle(true)}
      onBlur={() => toggle(false)}
      href={href}
    >
      <animated.div style={infoHover} className="ImageCard-cover">
        <p className="ImageCard-title">{title}</p>
      </animated.div>
      <img className="ImageCard-img" src={image} alt="" />
    </animated.a>
  );
};

export default ImageCard;
