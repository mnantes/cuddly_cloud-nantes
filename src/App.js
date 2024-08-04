// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" className="title-link">
          <h1>Bem-vindo à Cuddly Cloud</h1>
        </Link>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Nossos Produtos" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
