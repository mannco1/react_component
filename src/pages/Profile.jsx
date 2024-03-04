// Home.jsx
import React from 'react';
import Post from '../Post.jsx'
import { Link } from 'react-router-dom';
import Header from '../elements/Header.jsx'
import Footer from '../elements/Footer.jsx'


function Profile() {
  return <div>
    <Header/>
    
    <Link to="/">
        <button>Перейти к странице Home</button>
      </Link>
    <Post />
    <Footer/>
  </div>;
}

export default Profile;
