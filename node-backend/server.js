// Import Express dan CORS
const express = require('express');
const cors = require('cors');

// Membuat aplikasi Express
const app = express();

// Menambahkan middleware CORS
app.use(cors({
  origin: 'http://localhost:3000',  // Ganti dengan domain/port dari frontend Anda
  methods: 'GET,POST,PUT,DELETE',  // Metode HTTP yang diizinkan
  allowedHeaders: 'Content-Type,Authorization',  // Header yang diizinkan
}));

// Route untuk endpoint root '/'
app.get('/', (req, res) => {
  res.send('Server berjalan dengan baik!');
});

// Route API untuk mengambil data user dari PHP backend
app.get('/api/users', (req, res) => {
  // Ambil data dari PHP backend (misalnya menggunakan axios atau fetch)
  const https = require('https');
  
  https.get('http://sqlsrv.test/koneksi.php', (response) => {
    let data = '';

    // Ambil data response dari PHP
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Setelah selesai, kirim data ke frontend
    response.on('end', () => {
      try {
        // Mengirim data ke frontend
        res.json(JSON.parse(data));
      } catch (error) {
        console.error('Error parsing JSON:', error);
        res.status(500).send('Error parsing data from PHP backend');
      }
    });
  }).on('error', (error) => {
    console.error(error);
    res.status(500).send('Error retrieving data from PHP backend');
  });
});

// Menjalankan server di port 5001
app.listen(5001, () => {
  console.log('Server berjalan di http://localhost:5001');
});
