import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <a className="header-story">Write a story </a>
      <h1>Material</h1>
      <a className="header-sign-in">Sign in/Sign up</a>
      <a className="nav-toggle" >&#9776;</a>
    </div>
  )
}

export default Header;
