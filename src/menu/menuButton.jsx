import React, { useState } from 'react';

import './menuButton.css';

import menuImage from '../assets/icons/menu.svg';
import Menu from './menu';

const MenuButton = () => {
  const [isMenuVisible, toggle] = useState(false);

  return (
    <React.Fragment>
      <button className="MenuButton-wrapper" onClick={() => toggle(!isMenuVisible)} type="button">
        <img src={menuImage} alt="" />
      </button>
      <Menu visible={isMenuVisible} />
    </React.Fragment>
  );
};

export default MenuButton;
