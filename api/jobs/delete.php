<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
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

if (!isset($_GET["id"])) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request data"
    ]);
    exit;
}

$jobId = $_GET["id"];

try {
    $query = "DELETE FROM jobs WHERE id = :id AND employer_id = :employer_id";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $jobId);
    $stmt->bindParam(":employer_id", $employerId);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Job deleted successfully"
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Failed to delete job"
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