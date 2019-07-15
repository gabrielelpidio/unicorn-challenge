import React, { useRef } from 'react';
import { animated } from 'react-spring';
import { useOnScrollFade } from './hooks';

const FadeWrapper = ({ children, className, id }) => {
  const ref = useRef();
  const fade = useOnScrollFade({
    target: ref,
    threshold: [0.3, 1],
  });
  return (
    <animated.div ref={ref} style={fade} className={className || ' '} id={id || ' '}>
      {children}
    </animated.div>
  );
};

export default FadeWrapper;
