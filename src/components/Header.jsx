import React from 'react';
// styles
import '../assets/styles/components/Header.scss';
// img
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons8-usuario-círculo-64.png';

const Header = () => (
  <header className='header'>
    <img src={logo} className='header__img' alt='header__imagen' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
