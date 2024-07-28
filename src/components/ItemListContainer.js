// src/components/ItemListContainer.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

function ItemListContainer({ greeting }) {
  const handleAdd = (quantity) => {
    alert(`Você adicionou ${quantity} itens ao carrinho`);
  };

  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <ItemCount stock={5} initial={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemListContainer;
