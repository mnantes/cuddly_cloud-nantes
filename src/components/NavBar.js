// src/components/NavBar.js
import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">SUA_MARCA</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
