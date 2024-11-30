<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include_once "../config/db.php";

if (!isset($_GET["id"])) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "ID job tidak ditemukan"
    ]);
    exit;
}

$job_id = $_GET["id"];

try {
    $query = "SELECT j.*, 
                j.company as company_name,
              u.email as company_email,
              c.logo as company_logo
              FROM jobs j 
              JOIN users u ON j.employer_id = u.id 
              LEFT JOIN companies c ON j.employer_id = c.user_id
              WHERE j.id = :job_id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":job_id", $job_id);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $job = $stmt->fetch(PDO::FETCH_ASSOC);

        $requiredFields = [
            'title',
            'type',
            'location',
            'description',
            'requirements',
            'deadline',
            'salary_range'
        ];

        foreach ($requiredFields as $field) {
            if (!isset($job[$field])) {
                $job[$field] = '';
            }
        }

        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "data" => $job
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            "status" => "error",
            "message" => "Job tidak ditemukan"
        ]);
    }
} catch (PDOException $e) {
    error_log("Database Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Internal server error: " . $e->getMessage()
    ]);
}
?>