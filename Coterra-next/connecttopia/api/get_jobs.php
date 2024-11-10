<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

require_once "./config/db.php";

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

    $query = "SELECT * FROM jobs WHERE status = 'active'";

    if (!empty($search)) {
        $search = mysqli_real_escape_string($conn, $search);
        $query .= " AND (title LIKE '%$search%' OR description LIKE '%$search%')";
    }

    if (!empty($location)) {
        $location = mysqli_real_escape_string($conn, $location);
        $query .= " AND location LIKE '%$location%'";
    }

    $query .= " ORDER BY posting_date DESC";

    $result = mysqli_query($conn, $query);

    if (!$result) {
        throw new Exception(mysqli_error($conn));
    }

    $jobs = [];
    while ($row = mysqli_fetch_assoc($result)) {
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
            'posting_date' => $row['posting_date']
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