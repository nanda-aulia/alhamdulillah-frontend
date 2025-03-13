import React, { useEffect, useState } from 'react';
import axios from 'axios';
function ProdukList() {
    const [produk, setProduk] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3001/produk')
        .then((response) => setProduk(response.data))
        .catch((error) => console.error(error));
    }, []);
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/produk/${id}`)
        .then(() => {
          setProduk(produk.filter((p) => p.id !== id));
        })
        .catch(err => console.error(err));
    };
    return (
      <div>
        <h2>Daftar Produk</h2>
        <ul>
          {produk.map((item) => (
            <li key={item.id}>
              {item.nama} - Rp{item.harga}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
   }
   export default ProdukList;