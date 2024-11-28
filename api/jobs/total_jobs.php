<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

include_once "../config/db.php";

try {
    $query = "SELECT COUNT(*) as total FROM jobs WHERE status = 'Active'";
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "data" => [
            "total" => (int)$result['total']
        ]
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Internal server error"
    ]);
}
?>