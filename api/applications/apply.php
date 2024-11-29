<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

if($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include_once '../config/db.php';

$headers = getallheaders();
$token = isset($headers['Authorization']) ? str_replace('Bearer ', '', $headers['Authorization']) : null;

if (!$token) {
    http_response_code(401);
    echo json_encode([
        'status' => 'error',
        'message' => 'Unauthorized'
    ]);
    exit;
}

$userData = json_decode(base64_decode($token), true);
$userId = $userData['id'];

$data = json_decode(file_get_contents('php://input'), true);

if (!isset($data['job_id'])) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Job ID is required'
    ]);
    exit;
}

try {
    $checkQuery = "SELECT id FROM applications WHERE job_id = :job_id AND user_id = :user_id";
    $checkStmt = $pdo->prepare($checkQuery);
    $checkStmt->bindParam(':job_id', $data['job_id']);
    $checkStmt->bindParam(':user_id', $userId);
    $checkStmt->execute();

    if ($checkStmt->rowCount() > 0) {
        http_response_code(400);
        echo json_encode([
            'status' => 'error',
            'message' => 'You have already applied for this job'
        ]);
        exit;
    }

    $query = "INSERT INTO applications (job_id, user_id) VALUES (:job_id, :user_id)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':job_id', $data['job_id']);
    $stmt->bindParam(':user_id', $userId);

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode([
            'status' => 'success',
            'message' => 'Application submitted successfully'
        ]);
    } else {
        throw new Exception('Failed to submit application');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
?>