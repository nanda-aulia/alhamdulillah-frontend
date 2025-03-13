// index.js
const express = require('express');
const cors = require('cors');
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
app.listen(PORT, () => {
console.log(`Server berjalan di http://localhost:${PORT}`);
});
