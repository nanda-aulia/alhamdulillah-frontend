// src/App.jsx
import React from 'react';
import TambahProduk from "./components/TambahProduk.jsx";
import ProdukList from './components/produkList.jsx';

function App() {
  return (
    <div>
      <h1>Aplikasi E-Commerce Sederhana</h1>
      <TambahProduk />
      <ProdukList />
    </div>
  );
}

export default App;