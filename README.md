## 🛒 Aplikasi E-Commerce Sederhana

### 📦 Repository

👉 [Klik disini untuk mengakses repository](https://github.com/nanda-aulia/alhamdulillah-frontend.git)

---

### 📝 Deskripsi Proyek

Aplikasi E-Commerce Sederhana adalah sistem berbasis web yang dirancang untuk mempermudah pengelolaan produk dalam platform e-commerce. Dibangun dengan React.js (frontend) dan Express.js (backend) dengan antarmuka modern dan intuitif. Fitur utama mencakup penambahan, pengeditan, penghapusan, dan tampilan daftar produk.

---

### 🛠️ Teknologi yang Diimplementasikan

- ⚛️ **Frontend**: React.js
- 🎨 **Styling**: Tailwind CSS
- 🔗 **HTTP Requests**: Axios
- 🟣 **Backend**: Express.js + Node.js
- 🔄 **API**: RESTful

---

### ⚙️ Instalasi

#### 📥 Install Dependencies
```bash
npm install
```
Perintah ini akan membaca daftar paket yang terdaftar di file package.json, lalu mengunduh serta menginstalnya ke dalam direktori proyek. Setelah proses instalasi selesai, aplikasi siap dijalankan dalam mode pengembangan.

#### ▶️ Menjalankan Backend
```bash
node index.js
```
Output: `Server running on port 3000`
Perintah ini akan mengeksekusi file index.js, yang biasanya berisi kode untuk menginisialisasi server backend menggunakan Node.js. Jika server berjalan dengan sukses, biasanya akan muncul output di terminal yang menunjukkan bahwa server telah aktif dan berjalan pada port tertentu, misalnya Server running on port 3000. Setelah backend berjalan, aplikasi siap untuk menerima permintaan dari frontend atau klien lainnya.

#### ▶️ Menjalankan Frontend
```bash
npm run dev
```
Akses melalui: `localhost:<port>`
Perintah ini akan menjalankan server pengembangan, biasanya menggunakan Vite atau tool serupa, sehingga aplikasi dapat diakses melalui browser pada localhost dengan port yang ditentukan dan dijalankan oleh frontend

---

### 📂 Struktur Proyek

```
ecommerce-main/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProdukList.jsx
│   │   │   ├── TambahProduk.jsx
│   │   │   └── EditProduk.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── backend/
    ├── index.js
    └── package.json
```

---

### 🔌 API Endpoints

#### 📄 Get All Products
- **Method**: GET
- **Endpoint**: `/produk`
- **Digunakan dalam**: `ProdukList.jsx`

#### 📄 Get Single Product
- **Method**: GET
- **Endpoint**: `/produk/:id`
- **Digunakan dalam**: `EditProduk.jsx`

#### ➕ Create Product
- **Method**: POST
- **Endpoint**: `/produk`
- **Digunakan dalam**: `TambahProduk.jsx`

#### ✏️ Update Product
- **Method**: PATCH
- **Endpoint**: `/produk/:id`
- **Digunakan dalam**: `EditProduk.jsx`

#### 🗑️ Delete Product
- **Method**: DELETE
- **Endpoint**: `/produk/:id`
- **Digunakan dalam**: `ProdukList.jsx`

---

### ✨ Fitur Aplikasi

#### 🟣 Dashboard Produk
- ➕ Form Tambah Produk
- 📜 Daftar Produk
- ✏️ Tombol Edit Produk
- 🗑️ Tombol Delete Produk
- ✨ Form Edit Produk

#### 🔄 Sistem CRUD dengan Fungsi Lengkap

1. **Penambahan Produk**
    - Tambah nama dan harga.
    - Klik tombol Simpan.
    - Daftar produk diperbarui otomatis.

2. **Edit / Update Produk**
    - Klik tombol Edit.
    - Edit nama dan harga.
    - Simpan perubahan tanpa reload.

3. **Hapus Produk**
    - Klik tombol Delete.
    - Produk langsung terhapus dari daftar.

---

# ✨ Review Aplikasi E-Commerce Sederhana

Aplikasi E-commerce ini berhasil dikembangkan dengan mengusung fitur-fitur modern yang tidak hanya fungsional tetapi juga memberikan pengalaman pengguna yang nyaman. Melalui serangkaian pengujian, aplikasi menunjukkan performa yang sangat baik tanpa ditemukannya bug atau error yang signifikan.

Berikut adalah tinjauan lengkap terkait keunggulan dan hasil implementasi aplikasi:

---


## 🖥️ Halaman dan Interaksi Utama

Aplikasi e-commerce sederhana ini dirancang untuk mengelola data produk. Tampilan aplikasi dibagi menjadi dua bagian utama:
- **Form Input** di sebelah kiri
- **Daftar Produk** di sebelah kanan

Melalui form input, pengguna dapat menambahkan nama produk beserta harga yang akan langsung ditampilkan pada daftar produk. Pada daftar produk, pengguna dapat melakukan aksi seperti:
- ✏️ Mengedit data produk
- 🗑️ Menghapus produk yang sudah tidak dibutuhkan

Aplikasi ini mempermudah pengguna dalam menambah, mengubah, dan menghapus data produk secara cepat dan praktis.

<img src="proweb hal utama.png">


---


## ⚙️ Fitur - fitur Utama


### 🟣 Dashboard Produk
Pada dashboard produk ini terdapat.
- Form Tambah Produk, untuk memasukkan nama dan harga produk baru yang akan ditambahkan ke daftar.
- Daftar Produk, menampilkan daftar produk beserta detail nama dan harga yang sudah terdata.
- Tombol Edit, mengedit informasi produk yang sudah ada.
- Tombol Delete, menghapus produk dari daftar.
- Form Edit Produk, formulir yang muncul saat akan melakukan pengeditan produk, dilengkapi tombol simpan dan batal.

<img src="proweb hal seluruh.png">


---


## 🔄 Sistem CRUD dengan Fungsi Lengkap

### ✅ Penambahan Produk
Pada penambahan produk ini terdapat.
- Judul Form
- Input Nama Produk
- Input Harga Produk
- Tombol Simpan

<img src="proweb tambah produk.png">


#### Tampilan setelah tambah produk:
Pada tampilan setelah penambahan produk ini terdapat.
- Form Tambah Produk
- Daftar Produk
- Tombol Edit
- Tombol Delete
- Tampilan Harga

<img src="proweb setelah input atau tambah.png">


---


### 🟡 Edit / Pembaruan Produk
Komponen yang terdapat pada form edit:
- Judul Formulir
- Input Nama Produk
- Input Harga Produk
- Tombol Simpan
- Tombol Batal

<img src="proweb edit 1.png">

<img src="proweb edit 2.png">



#### Tampilan setelah edit produk:
- Judul Halaman
- Form Tambah Produk (sebelah kiri)
- Daftar Produk (sebelah kanan)
- Perubahan yang terlihat setelah proses Edit
- Data produk yang sebelumnya diedit sudah diperbarui dan langsung muncul di daftar produk tanpa reload halaman.

<img src="proweb tampilan setelah edit.png">


---



### 🟥 Hapus / Delete Produk
Berikut ini tampilan sebelum produk dihapus.
- Tampilan sebelum produk dihapus

<img src="proweb sebelum delete.png">

- Tampilan setelah produk dihapus  
Pada tampilan ini, dibagian daftar produk setelah di input akan langsung terhapus jika menekan fitur delete. Sehingga dapat terlihat sebelum di delete terdapat 3 produk kini tersisa 2 produk saja.

<img src="proweb setelah delete.png">


---



### 🔵 Tampilan Tanpa Daftar Produk (Empty State)
Berikut ini, tampilan ketika tanpa daftar produk
- Judul Aplikasi
- Form Tambah Produk (kiri)
- Daftar Produk yang kosong
- Empty State

<img src="hapus semua produk.png">


---



## 🟢 Validasi dan Error Handling
Terdapat komponen sebagai berikut:
- Judul aplikasi
- Form Tambah Produk
- Input Nama Produk
- Input Harga Produk
- Tombol Simpan
- Pesan Error / Validasi: **"Nama dan Harga wajib diisi"**
- Daftar Produk

Saat pengguna langsung menekan tombol simpan tanpa mengisi form, pesan error akan langsung muncul agar pengguna melakukan input data yang benar.

<img src="validasi.png">


---



## ✅ Kesimpulan

Setelah melalui proses perancangan, implementasi, pengujian, serta perbaikan, aplikasi **E-Commerce Sederhana** ini:
-  Berjalan dengan stabil tanpa error
-  Memiliki performa yang optimal
-  Menyajikan UX/UI yang modern dan user-friendly
-  Menangani berbagai kasus penggunaan dengan baik
-  Memberikan feedback yang jelas kepada pengguna

Semua fitur berfungsi sesuai spesifikasi yang telah ditentukan sehingga memberikan pengalaman manajemen produk yang lancar, profesional, dan memuaskan bagi pengguna.


---



## 🛠️ Troubleshooting

### 🚫 Server Tidak Berjalan
- Pastikan tidak ada aplikasi lain yang sedang menggunakan port 3001.
- Cek kembali apakah Node.js dan NPM sudah terinstal dengan benar.

### 🌐 Frontend Tidak Dapat Diakses
- Pastikan seluruh dependensi sudah terpasang dengan menjalankan perintah `npm install`.
- Periksa konsol pada browser untuk melihat pesan error yang mungkin muncul.

### ⚡ API Tidak Merespons
- Pastikan server backend dalam keadaan aktif dan berjalan.
- Periksa kembali URL dan port yang digunakan apakah sudah sesuai dengan konfigurasi.

---




