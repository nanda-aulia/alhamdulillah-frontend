import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProdukList() {
    const [produk, setProduk] = useState([]);
    const [editId, setEditId] = useState(null);
    const [nama, setNama] = useState('');
    const [harga, setHarga] = useState('');

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

    const handleEdit = (item) => {
        setEditId(item.id);
        setNama(item.nama);
        setHarga(item.harga);
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:3001/produk/${editId}`, {
            nama,
            harga
        })
        .then((response) => {
            setProduk(produk.map((p) => (p.id === editId ? response.data : p)));
            setEditId(null);
            setNama('');
            setHarga('');
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
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>

            {editId && (
                <div>
                    <h3>Edit Produk</h3>
                    <input
                        type="text"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        placeholder="Nama Produk"
                    />
                    <input
                        type="number"
                        value={harga}
                        onChange={(e) => setHarga(e.target.value)}
                        placeholder="Harga Produk"
                    />
                    <button onClick={handleUpdate}>Simpan</button>
                    <button onClick={() => setEditId(null)}>Batal</button>
                </div>
            )}
        </div>
    );
}

export default ProdukList;
