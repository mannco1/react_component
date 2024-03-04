import React from 'react';
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='your_acc'>
        <p className='txt'>Ваш аккаунт<hr color='black'/></p>
        <center><a className='link'>Вход</a></center>
        <center><a className='link'>Регистрация</a></center>
      </section>
      <section className='add'>
        <p className='txt'>Дополнительно<hr color='black'/></p>
      <center><a className='link'>Тех. поддержка</a></center>
      </section>
    </footer>
  );
};

export default Footer;
