import React from 'react';
import { Link } from 'react-router-dom';
// styles
import '../assets/styles/components/Header.scss';
// img
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons8-usuario-círculo-64.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img src={logo} className='header__img' alt='header__imagen' />
    </Link>
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='user' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><Link to='/login'>Iniciar sesión</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
