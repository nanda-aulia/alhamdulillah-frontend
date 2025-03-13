import React, { useState } from 'react';
 import axios from 'axios';
function TambahProduk() {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi
    if (!nama || !harga) {
      setError('Nama dan Harga wajib diisi');
      return;
    }
    setError('');
    axios.post('http://localhost:3001/produk', { nama, harga })
      .then((res) => {
        console.log('Produk berhasil ditambah:', res.data);
        setNama('');
        setHarga('');
      })
      .catch((err) => {
        console.error('Error menambah produk:', err);
      });
  };
  return (
    <div>
      <h2>Tambah Produk</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Produk: </label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div>
          <label>Harga: </label>
          <input
            type="number"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}
 export default TambahProduk;