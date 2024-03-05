// Home.jsx
import React from 'react';
import Post from '../Post.jsx'
import { Link } from 'react-router-dom';
import Header from '../elements/Header.jsx'
import Footer from '../elements/Footer.jsx'
import Validation from '../Validation.jsx'
import '../css/index.css'


function Log() {
  return <div>
    <Header/>
    <p>Пройдите регистрацию пожалуйста</p>
    
    <Validation />
   
    <Footer/>
  </div>;
}

export default Log;
