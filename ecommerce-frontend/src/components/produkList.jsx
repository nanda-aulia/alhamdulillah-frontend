// src/components/ProdukList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function ProdukList() {
  const [produk, setProduk] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editNama, setEditNama] = useState("");
  const [editHarga, setEditHarga] = useState(0);
  
  useEffect(() => {
    fetchProduk();
  }, []);
  
  const fetchProduk = () => {
    axios
      .get("http://localhost:3001/produk")
      .then((response) => {
        setProduk(response.data);
      })
      .catch((error) => {
        console.error("Terjadi error:", error);
      });
  };
  
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch(err => console.error("Error saat menghapus:", err));
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setEditNama(item.nama);
    setEditHarga(item.harga);
  };

  const handleUpdate = () => {
    if (editId === null) return;
    
    axios.put(`http://localhost:3001/produk/${editId}`, {
      nama: editNama,
      harga: editHarga
    })
      .then(() => {
        setEditId(null);
        setEditNama("");
        setEditHarga(0);
        fetchProduk();
      })
      .catch(err => console.error("Error saat update:", err));
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditNama("");
    setEditHarga(0);
  };

  return (
    <div>
      <h2>Daftar Produk (From Database)</h2>
      
      {editId !== null && (
        <div>
          <h3>Edit Produk</h3>
          <div>
            <label>Nama: </label>
            <input 
              type="text" 
              value={editNama} 
              onChange={(e) => setEditNama(e.target.value)} 
            />
          </div>
          <div>
            <label>Harga: </label>
            <input 
              type="number" 
              value={editHarga} 
              onChange={(e) => setEditHarga(Number(e.target.value))} 
            />
          </div>
          <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      )}
      
      <ul>
        {produk.map((item) => (
          <li key={item.id}>
            {item.nama} - Rp{item.harga}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdukList;