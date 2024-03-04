import React from 'react';
import '../css/Header.css';
const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>Блог 2.0</div>
        <input type='text' className='search' placeholder='поиск...' ></input>
        <a className='profile'><img/></a>
    </header>
  );
};

export default Header;
