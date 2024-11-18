<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");
require_once 'koneksi.php';
// Disable error display
error_reporting(0);
ini_set('display_errors', 0);

// Koneksi ke SQL Server
$serverName = "localhost";
$connectionOptions = array(
    "Database" => "db_polinemakarir",
    "Uid" => "SA",
    "PWD" => "Ankaramessi123"
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    die(json_encode([
        "success" => false,
        "message" => "Connection failed: " . print_r(sqlsrv_errors(), true),
        "data" => null
    ]));
}

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method not allowed",
        "data" => null
    ]);
    exit;
}

try {
    $search = isset($_GET["search"]) ? $_GET["search"] : "";
    $location = isset($_GET["location"]) ? $_GET["location"] : "";

    $query = "SELECT * FROM loker";

    $params = array();

    if (!empty($search)) {
        $search = sqlsrv_real_escape_string($conn, $search); // Escape search
        $query .= " AND (job_title LIKE ? OR description LIKE ?)";
        $params[] = "%$search%";
        $params[] = "%$search%";
    }

    if (!empty($location)) {
        $location = sqlsrv_real_escape_string($conn, $location); // Escape location
        $query .= " AND location LIKE ?";
        $params[] = "%$location%";
    }

    $query .= " ORDER BY posting_date DESC";

    // Eksekusi query
    $stmt = sqlsrv_query($conn, $query, $params);

    if ($stmt === false) {
        throw new Exception(print_r(sqlsrv_errors(), true));
    }

    $jobs = [];
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        if (!empty($row["company_logo_base64"])) {
            $row['company_logo_base64'] = 'data:image/jpeg;base64,' . $row['company_logo_base64'];
        }

        $jobs[] = [
            'id' => $row['job_id'],
            'title' => $row['job_title'],
            'company_name' => $row['company_name'],
            'location' => $row['location'],
            'type' => $row['employment_type'],
            'salary' => $row['salary_amount'],
            'salary_type' => $row['salary_type'],
            'description' => $row['description'],
            'image' => $row['company_logo_base64'],
            // 'posting_date' => $row['posting_date']
        ];
    }

    echo json_encode([
        'success' => true,
        'message' => 'Jobs retrieved successfully',
        'data' => $jobs
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Error: ' . $e->getMessage(),
        'data' => null
    ]);
}
?>