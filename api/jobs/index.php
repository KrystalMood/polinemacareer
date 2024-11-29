<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include_once '../config/db.php';

try {
    $sort_field = isset($_GET['sort_field']) ? $_GET['sort_field'] : 'created_at';
    $sort_direction = isset($_GET['sort_direction']) ? $_GET['sort_direction'] : 'DESC';

    $allowed_fields = ['created_at', 'title', 'company', 'location', 'type'];

    if (!in_array($sort_field, $allowed_fields)) {
        $sort_field = 'created_at';
    }

    $sort_direction = strtoupper($sort_direction);
    if (!in_array($sort_direction, ['ASC', 'DESC'])) {
        $sort_direction = 'DESC';
    }

    $query = "SELECT * FROM jobs WHERE status = 'Active' ORDER BY $sort_field $sort_direction";
    $stmt = $pdo->prepare($query);
    $stmt->execute();

    $jobs = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => "success",
        "data" => $jobs
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Something went wrong " . $e->getMessage()
    ]);
}
?>