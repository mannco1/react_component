import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>Блог 2.0</div>
        <div>
        <Link to="/">
        <button>Перейти к странице Home</button>
      </Link>
      <Link to="/profile">
        <button>Перейти к странице Profile</button>
      </Link>

        </div>
        <input type='text' className='search' placeholder='поиск...' ></input>
        <Link to="/log">
    <button><a className='profile'><img/></a></button>
  </Link>
    </header>
    
  );
};

export default Header;
