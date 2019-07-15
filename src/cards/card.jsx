import React, { useState, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import PropTypes from 'prop-types';

import './card.css';

const Card = ({
  size, style, image, title, description, bottom,
}) => {
  const ref = useRef();

  const classNameMaker = (str, attr) => `${str}-${attr}`;

  const [hovered, toggle] = useState(false);

  const hover = useSpring({
    transform: hovered ? `scale(${1.05})` : `scale(${1})`,
    boxShadow: hovered
      ? '0px 8px 16px rgba(157, 168, 190, 0.5)'
      : '0px 4px 8px rgba(157, 168, 190, 0.5)',
    config: config.gentle,
  });

  return (
    <animated.div
      className={`${classNameMaker('card', size)} card`}
      ref={ref}
      style={{ ...hover, ...style }}
      onMouseOver={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      onFocus={() => toggle(true)}
      onBlur={() => toggle(false)}
    >
      {image && (
        <div className={classNameMaker('card-logo', size)}>
          <img src={image} alt="" />
        </div>
      )}
      <div className={classNameMaker('card-text', size)}>
        {title && <h4 className={classNameMaker('card-title', size)}>{title}</h4>}
        {description && <p className={classNameMaker('card-description', size)}>{description}</p>}
        {bottom && (
        <p className={classNameMaker('bottom-text', size)}>
-
          {bottom}
        </p>
        )}
      </div>
    </animated.div>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(['small', 'large', undefined]),
  isFaded: PropTypes.oneOf([true, false, undefined]),
};

Card.defaultProps = {
  size: 'small',
  isFaded: true,
};

export default Card;
