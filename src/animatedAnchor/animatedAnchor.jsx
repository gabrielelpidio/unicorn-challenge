import React, { useState } from 'react';
import { useSpring, animated, interpolate, config } from 'react-spring';

const AnimatedAnchor = props => {
  const [hovered, toggle] = useState(false);
  const hover = useSpring({
    transform: hovered ? `scale(${1.15})` : `scale(${1})`,
    config: config.slow
  });

  return (
    <animated.a
      href={props.href}
      className={props.className}
      style={hover}
      onMouseOver={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
    >
      {props.children}
    </animated.a>
  );
};

export default AnimatedAnchor;
