import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <div className="brand">cuddly cloud</div>
      <ul className="nav-list">
        <li><a href="#features">features</a></li>
        <li><a href="#pricing">pricing</a></li>
        <li><a href="#about">about</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
