// src/components/ItemDetailContainer.js
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { mockItems } from './mockData';

const getItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = mockItems.find((item) => item.id === id);
      resolve(item);
    }, 2000);
  });
};

function ItemDetailContainer({ itemId }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(itemId).then((item) => {
      setItem(item);
    });
  }, [itemId]);

  return item ? <ItemDetail item={item} /> : <p>Carregando...</p>;
}

export default ItemDetailContainer;
