// src/components/ItemListContainer.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';
import { mockItems } from './mockData';

const getItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockItems);
    }, 2000);
  });
};

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    getItems().then(items => {
      setItems(items);
    });
  }, []);

  const handleAdd = (quantity) => {
    alert(`Você adicionou ${quantity} itens ao carrinho`);
  };

  const handleItemClick = (item) => {
    setSelectedItemId(item.id);
  };

  return (
    <div className="container mt-5">
      <h2>{greeting}</h2>
      <ItemCount stock={5} initial={1} onAdd={handleAdd} />
      {selectedItemId ? (
        <ItemDetailContainer itemId={selectedItemId} />
      ) : (
        <ItemList items={items} onItemClick={handleItemClick} />
      )}
    </div>
  );
}

export default ItemListContainer;
