import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { log } from 'util';
import { useOnScrollFade } from '../utilities/hooks';
import rocketImage from '../assets/icons/rocket.png';

const Rocket = () => {
  const [clicked, toggle] = useState(false);
  const ref = useRef();

  const scale = useSpring({
    transform: clicked ? `scale(${1.05}) rotate(-180deg)` : `scale(${1}) rotate(0deg)`,
  });

  const fade = useOnScrollFade({
    target: ref,
    threshold: [0.7, 1],
  });

  return (
    <animated.div
      className="rocket"
      ref={ref}
      style={{ ...fade, ...scale }}
      onTouchStart={() => toggle(true)}
      onTouchEnd={() => toggle(false)}
      onMouseDown={() => toggle(true)}
      onMouseUp={() => toggle(false)}
    >
      <img src={rocketImage} alt="" />
    </animated.div>
  );
};

export default Rocket;
