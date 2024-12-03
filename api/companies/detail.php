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
        "message" => "ID is required",
    ]);
    exit;
}

$company_id = $_GET["id"];

try {
    $query = "SELECT c.*, u.email
    FROM companies c
    JOIN users u ON c.user_id = u.id
    WHERE c.id = :company_id";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":company_id", $company_id);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $company = $stmt->fetch(PDO::FETCH_ASSOC);

        $jobsQuery = "SELECT COUNT(*) as open_positions
        FROM jobs
        WHERE employer_id = :employer_id
        AND status = 'active'";

        $jobsStmt = $pdo->prepare($jobsQuery);
        $jobsStmt->bindParam(":employer_id", $company["user_id"]);
        $jobsStmt->execute();

        $jobsCount = $jobsStmt->fetch(PDO::FETCH_ASSOC);

        $company["open_positions"] = $jobsCount["open_positions"];

        $requiredFields = [
            'name' => '',
            'location' => '',
            'description' => '',
            'logo' => '',
            'employee_count' => 0,
            'industry' => '',
            'founded_year' => '',
            'website' => '',
            'email' => '',
            'phone' => '',
        ];

        foreach ($requiredFields as $field => $defaultValue) {
            if (!isset($company[$field])) {
                $company[$field] = $defaultValue;
            }
        }

        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "data" => $company,
        ]);
    } else {
        http_response_code(404);
        echo json_encode([
            "status" => "error",
            "message" => "Company not found",
        ]);
    }
} catch (PDOException $e) {
    error_log("Database error in company detail: " . $e->getMessage());
    error_log("SQL State: " . $e->getCode());

    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Something went wrong" . $e->getMessage(),
    ]);
}
?>