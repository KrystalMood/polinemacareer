<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include_once '../config/db.php';

if (!isset($_GET['job_id'])) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Job ID is required'
    ]);
    exit;
}

try {
    $query = "SELECT a.*, u.full_name, u.email 
    FROM applications a 
    JOIN users u ON a.user_id = u.id 
    WHERE a.job_id = :job_id 
    ORDER BY a.created_at DESC";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':job_id', $_GET['job_id']);
    $stmt->execute();

    $applicants = $stmt->fetchAll(PDO::FETCH_ASSOC);

    http_response_code(200);
    echo json_encode([
        'status' => 'success',
        'data' => $applicants
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
?>