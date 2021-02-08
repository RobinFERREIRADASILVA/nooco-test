import React from 'react';

import './header.scss';

import iconNooco from 'src/assets/images/nooco.svg';

const Header = () => (
  <div className="header">
    <img src={iconNooco} alt="logo Nooco" />
    <div className="header-infos">
      <h1>Bonjour, <br/> 
      Bienvenue sur votre interface <span className="header-nooco">Nooco</span></h1>
    </div>
  </div>
);

export default Header;
