// src/components/ItemDetail.js
import React from 'react';
import './ItemDetail.css';

function ItemDetail({ item }) {
  return (
    <div className="item-detail card">
      <img src={item.pictureUrl} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>Preço:</strong> ${item.price}</p>
      <p><strong>Material:</strong> {item.details.material}</p>
      <p><strong>Cor:</strong> {item.details.color}</p>
      <p><strong>Peso:</strong> {item.details.weight}</p>
      <p><strong>Tamanho:</strong> {item.details.size}</p>
    </div>
  );
}

export default ItemDetail;
