<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: GET");

include_once 'koneksi.php';

// Cek apakah request method adalah GET
if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed",
        "data" => null
    ]);
    exit;
}

session_start(); // Memulai sesi untuk mengecek apakah pengguna sudah login

// Memeriksa apakah pengguna sudah login
if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        "success" => false,
        "message" => "User not logged in",
        "data" => null
    ]);
    exit;
}

try {
    // Mengambil ID pengguna yang login dari sesi
    $userId = $_SESSION['user_id'];

    // Ambil parameter dari query string jika ada
    $search = isset($_GET['search']) ? "%" . $_GET['search'] . "%" : '';
    $location = isset($_GET['location']) ? "%" . $_GET['location'] . "%" : '';

    $conn = getDbConnection();

    // Query untuk mengambil pekerjaan yang relevan berdasarkan pengguna
    $query = "SELECT * FROM loker WHERE (job_title LIKE :search OR description LIKE :search) AND location LIKE :location ORDER BY posting_date DESC";

    // Persiapkan dan jalankan query
    $stmt = $conn->prepare($query);
    $stmt->bindParam(':search', $search, PDO::PARAM_STR);
    $stmt->bindParam(':location', $location, PDO::PARAM_STR);

    $stmt->execute();

    // Ambil hasil query
    $jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Cek apakah ada hasil pekerjaan
    if ($jobs) {
        echo json_encode([
            'success' => true,
            'message' => 'Jobs retrieved successfully',
            'data' => $jobs
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'No jobs found',
            'data' => []
        ]);
    }

} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage(),
        'data' => null
    ]);
}
?>