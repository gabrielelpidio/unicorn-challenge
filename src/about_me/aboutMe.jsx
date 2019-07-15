import React, { useRef } from 'react';
import { animated } from 'react-spring';
import Card from '../cards/card';
import './aboutMe.css';
import { useOnScrollFade } from '../utilities/hooks';

const AboutMe = ({ style }) => {
  const ref = useRef();
  const fade = useOnScrollFade({
    target: ref,
    threshold: [0.2, 1],
  });

  return (
    <animated.div style={{ ...style, ...fade }} className="AboutMe" ref={ref}>
      <h2 className="AboutMe-title">Sobre Mi</h2>

      <Card
        size="large"
        description="Soy Gabriel, un desarrollador Frontend apasionado por la tecnología y aprender cosas nuevas. Y quiero algún día poder aportar al crecimiento de Latam"
        bottom="Quisiera trabajar en una startup cool 🤓"
      />
    </animated.div>
  );
};

export default AboutMe;
