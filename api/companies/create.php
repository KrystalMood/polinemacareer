<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->user_id) || !isset($data->name) || !isset($data->location) || !isset($data->description) || !isset($data->employee_count) || !isset($data->open_positions)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Missing required fields"
    ]);
    exit;
}

try {
    $query = "INSERT INTO companies (user_id, name, location, created_at
    VALUES (:user_id, :name, :location, NOW())";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":user_id", $data->user_id);
    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":location", $data->location);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            "status" => "success",
            "message" => "Company created successfully"
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Failed to create company"
        ]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Database error: " . $e->getMessage()
    ]);
}
?>