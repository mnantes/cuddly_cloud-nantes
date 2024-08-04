// src/components/ItemList.js
import React from 'react';
import Item from './Item';

function ItemList({ items, onItemClick }) {
  return (
    <div className="item-list">
      {items.map(item => (
        <Item key={item.id} item={item} onClick={onItemClick} />
      ))}
    </div>
  );
}

export default ItemList;
