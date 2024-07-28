// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à nossa loja de ursos de pelúcia!" />
    </div>
  );
}

export default App;
