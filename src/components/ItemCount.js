// src/components/ItemCount.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (stock > 0) {
      onAdd(count);
    }
  };

  return (
    <div className="item-count">
      <div className="d-flex align-items-center">
        <button className="btn btn-secondary" onClick={handleDecrement} disabled={count <= 1}>
          -
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-secondary" onClick={handleIncrement} disabled={count >= stock}>
          +
        </button>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleAdd} disabled={stock === 0}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ItemCount;
