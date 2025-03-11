import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="profile">
        <img
          src="https://proyecto-final-curso-maquetacion-web.netlify.app/assets/imgs/sergie.png"
          alt="Sergie Code"
        />
        <h1>Sergie Code</h1>
        <p className="tagline">Aprende desarrollo web y programación</p>
      </div>
    </header>
  );
};

export default Header;