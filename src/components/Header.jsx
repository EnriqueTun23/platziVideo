import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// gravatar
import gravatar from '../utils/gravatar';
// actions
import { logoutRequest } from '../actions';
// styles
import '../assets/styles/components/Header.scss';
// img
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons8-usuario-círculo-64.png';

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} className='header__img' alt='header__imagen' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='user' />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <li><a href='/'>{user.name}</a></li> :
            null}
          {hasUser ?
            <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> :
            <li><Link to='/login'>Iniciar sesión</Link></li>}
        </ul>
      </div>
    </header>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
