// src/components/CartWidget.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function CartWidget() {
  return (
    <div className="cart-widget">
      <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}></i>
    </div>
  );
}

export default CartWidget;
