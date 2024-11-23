<?php


// Konfigurasi server dan database
$serverName = "localhost";  // Ganti dengan nama server atau IP Address SQL Server kamu
$connectionOptions = array(
    "Database" => "db_polinemakarir",  // Ganti dengan nama database SQL Server
    "Uid" => "SA",  // Ganti dengan username SQL Server
    "PWD" => "Ankaramessi123"   // Ganti dengan password SQL Server
);

// Mencoba membuat koneksi ke SQL Server
$conn = sqlsrv_connect($serverName, $connectionOptions);

// Mengecek jika koneksi berhasil
if (!$conn) {
    die("Koneksi gagal: " . print_r(sqlsrv_errors(), true));
}

// Query untuk mengambil data dari tabel 'user'
$sql = "SELECT username, nama, Role_idRole FROM [user]";
$query = sqlsrv_query($conn, $sql);

// Mengecek apakah query berhasil dijalankan
if ($query === false) {
    die(print_r(sqlsrv_errors(), true));
}

// Menampilkan data dalam tabel HTML
echo "<h2>Data Pengguna</h2>";
echo "<table border='1' cellpadding='10'>";
echo "<tr><th>Username</th><th>Nama</th><th>Role ID</th></tr>";

// Menampilkan setiap baris data
while ($row = sqlsrv_fetch_array($query, SQLSRV_FETCH_ASSOC)) {
    echo "<tr>";
    echo "<td>" . htmlspecialchars($row['username']) . "</td>";
    echo "<td>" . htmlspecialchars($row['nama']) . "</td>";
    echo "<td>" . htmlspecialchars($row['Role_idRole']) . "</td>";
    echo "</tr>";
}

echo "</table>";

// Menutup koneksi
sqlsrv_close($conn);
?>