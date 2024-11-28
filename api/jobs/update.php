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

$data = json_decode(file_get_contents("php://input"));

if (!isset($data->id) || !isset($data->title) || !isset($data->type)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request data"
    ]);
    exit;
}

try {
    $query = "UPDATE jobs SET title = :title, type = :type, location = :location, description = :description, requirements = :requirements, deadline = :deadline, salary_range = :salary_range, updated_at = NOW() WHERE id = :id AND employer_id = :employer_id";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $data->id);
    $stmt->bindParam(":employer_id", $employerId);
    $stmt->bindParam(":title", $data->title);
    $stmt->bindParam(":type", $data->type);
    $stmt->bindParam(":location", $data->location);
    $stmt->bindParam(":description", $data->description);
    $stmt->bindParam(":requirements", $data->requirements);
    $stmt->bindParam(":deadline", $data->deadline);
    $stmt->bindParam(":salary_range", $data->salary_range);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Job updated successfully"
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Failed to update job"
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