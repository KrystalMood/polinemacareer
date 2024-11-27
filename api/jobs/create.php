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
$headers = getallheaders();
$token = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : null;

if (!$token) {
    http_response_code(401);
    echo json_encode([
        "status" => "error",
        "message" => "Unauthorized"
    ]);
    exit;
}

$userData = json_decode(base64_decode($token), true);
$employer_id = $userData["id"];
$company_name = $userData["companyName"];

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request"
    ]);
    exit;
}

if (!isset($data->title) || !isset($data->type) || !isset($data->location) || 
    !isset($data->description) || !isset($data->requirements) || 
    !isset($data->deadline) || !isset($data->salary_range)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Data tidak lengkap"
    ]);
    exit;
}

if (!$userData || !isset($userData["id"]) || !isset($userData["companyName"])) {
    http_response_code(401); 
    echo json_encode([
        "status" => "error",
        "message" => "Token tidak valid"
    ]);
    exit;
}

try {
    $query = "INSERT INTO jobs (employer_id, company, title, type, location, description, requirements, deadline, salary_range, status, created_at)
    VALUES (:employer_id, :company, :title, :type, :location, :description, :requirements, :deadline, :salary_range, 'Active', NOW())";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":employer_id", $employer_id);
    $stmt->bindParam(":title", $data->title);
    $stmt->bindParam(":company", $company_name);
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