// src/components/ProdukList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProdukList() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produk')
      .then((response) => {
        setProduk(response.data);
      })
      .catch((error) => {
        console.error('Terjadi error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Daftar Produk (From Database)</h2>
      <ul>
        {produk.map((item) => (
          <li key={item.id}>
            {item.nama} - Rp{item.harga}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdukList;