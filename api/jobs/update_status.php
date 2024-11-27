<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include_once "../config/db.php";
$headers = getallheaders();
$token = isset($headers["Authorization"]) ? str_replace("Bearer ", "", $headers["Authorization"]) : null;

if (!$token) {
    http_response_code(401);
    echo json_encode([
        "status" => "error",
        "message" => "Unauthorized"
    ]);
    exit;
}

$userData = json_decode(base64_decode($token), true);
$employerId = $userData["id"];

$data = json_decode(file_get_contents("php://input"), true);

$allowedStatus = ["Active", "Closed", "Draft"];
if (!isset($data["id"]) || !in_array($data["status"], $allowedStatus)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request data"
    ]);
    exit;
}

try {
    $query = "UPDATE jobs SET status = :status WHERE id = :id AND employer_id = :employer_id";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $data["id"]);
    $stmt->bindParam(":employer_id", $employerId);
    $stmt->bindParam(":status", $data["status"]);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Job status updated successfully"
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Failed to update job status"
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