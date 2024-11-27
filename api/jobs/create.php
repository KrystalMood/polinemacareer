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

include_once "../config/db.php";

$data = json_decode(file_get_contents("php://input"));

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request"
    ]);
    exit;
}

try {
    $query = "INSERT INTO jobs (title, type, location, description, requirements, deadline, salary_range, created_at)
    VALUES (:title, :type, :location, :description, :requirements, :deadline, :salary_range, NOW())";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":title", $data->title);
    $stmt->bindParam(":type", $data->type);
    $stmt->bindParam(":location", $data->location);
    $stmt->bindParam(":description", $data->description);
    $stmt->bindParam(":requirements", $data->requirements);
    $stmt->bindParam(":deadline", $data->deadline);
    $stmt->bindParam(":salary_range", $data->salary_range);

    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            "status" => "success",
            "message" => "Job created successfully"
        ]);
    } else {
        throw new Exception("Failed to create job");
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => $e->getMessage()
    ]);
}
?>