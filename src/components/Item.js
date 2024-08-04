// src/components/Item.js
import React from 'react';
import './Item.css';

function Item({ item, onClick }) {
  return (
    <div className="item card" onClick={() => onClick(item)}>
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>${item.price}</p>
    </div>
  );
}

export default Item;
