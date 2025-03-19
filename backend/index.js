// index.js (gabungan)
const express = require('express');
const cors = require('cors');
const pool = require('./db');
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
res.send('Hello World from Express.js!');
});
app.post('/data', (req, res) => {
const { nama } = req.body;
res.send(`Data diterima: ${nama}`);
});
// CREATE
app.post('/produk', async (req, res) => {
const { nama, harga } = req.body;
try {
const newProduk = await pool.query(
'INSERT INTO produk (nama, harga) VALUES ($1, $2) RETURNING *',
[nama, harga]
);
app.put('/produk/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;
    try {
    const updateProduk = await pool.query(
    'UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *',
    [nama, harga, id]
    );
    res.json(updateProduk.rows[0]);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
    });
    app.delete('/produk/:id', async (req, res) => {
    const { id } = req.params;
    try {
    await pool.query('DELETE FROM produk WHERE id = $1', [id]);
    res.json({ message: 'Produk dihapus' });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
    });    
res.json(newProduk.rows[0]);
} catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
    });
    // READ
    app.get('/produk', async (req, res) => {
    try {
    const allProduk = await pool.query('SELECT * FROM produk');
    res.json(allProduk.rows);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
    });
    app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    });
//PUT PRODUK
app.put('/produk/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, harga } = req.body;
    try {
    const updateProduk = await pool.query(
    'UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *',
    [nama, harga, id]
    );
    res.json(updateProduk.rows[0]);
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
    });


    app.get('/produk/:id', async (req, res) => {
        try {
            const { id } = req.params;
            const produk = await pool.query('SELECT * FROM produk WHERE id = $1', [id]);
            
            if (produk.rows.length === 0) {
                return res.status(404).json({ message: 'Produk tidak ditemukan' });
            }
            
            res.json(produk.rows[0]);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Server error' });
        }
    });

// Update product
app.patch('/produk/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nama, harga } = req.body;
        
        const result = await pool.query(
            'UPDATE produk SET nama = $1, harga = $2 WHERE id = $3 RETURNING *',
            [nama, harga, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Produk tidak ditemukan' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

//Delete PRODUK
app.delete('/produk/:id', async (req, res) => {
    const { id } = req.params;
    try {
    await pool.query('DELETE FROM produk WHERE id = $1', [id]);
    res.json({ message: 'Produk dihapus' });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    }
    });

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});