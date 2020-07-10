import React from 'react';
import '../assets/style/components/Header.scss';
import logo from '../assets/Static/logo-platzi-video-BW2.png';
import userIcon from '../assets/Static/user-icon.png';
/* se crearan componentes presentacionales, lo que no tienen logica, solo empujan el html dentro del proyecto*/

const Header = () => (
    <header className="header">
    <img className="header__img" src= {logo} alt="Platzi Video"/>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src= {userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;