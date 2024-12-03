<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include_once './config/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method not allowed"
    ]);
    exit();
}

$data = $_POST;

if (!$data || !isset($data['email']) || !isset($data['password']) || !isset($data['role'])) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Data is missing"
    ]);
    exit();
}

$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$password = $data['password'];
$role = htmlspecialchars(strip_tags($data['role']));

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email format"
    ]);
    exit();
}

if (strlen($password) < 8) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Password must be at least 8 characters long"
    ]);
    exit();
}

try {
    $pdo->beginTransaction();
    
    $query = "INSERT INTO users (email, password, role, created_at) 
              VALUES (:email, :password, :role, NOW())";
    
    $stmt = $pdo->prepare($query);
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":password", $hashedPassword);
    $stmt->bindParam(":role", $role);
    
    $stmt->execute();
    $userId = $pdo->lastInsertId();

    if ($role === "employer") {
        $companyQuery = "INSERT INTO companies (user_id, created_at) 
                        VALUES (:user_id, NOW())";
        
        $companyStmt = $pdo->prepare($companyQuery);
        $companyStmt->bindParam(":user_id", $userId);
        $companyStmt->execute();
    } else if ($role === "job_seeker") {
        $profileQuery = "INSERT INTO applicant_profiles (user_id, email, created_at)
                        VALUES (:user_id, :email, NOW())";
        
        $profileStmt = $pdo->prepare($profileQuery);
        $profileStmt->bindParam(":user_id", $userId);
        $profileStmt->bindParam(":email", $email);
        $profileStmt->execute();
    }

    $pdo->commit();

    http_response_code(201);
    echo json_encode([
        "status" => "success",
        "message" => "Registration successful",
        "data" => [
            "user" => [
                "id" => $userId,
                "email" => $email,
                "role" => $role
            ]
        ]
    ]);

} catch(PDOException $e) {
    $pdo->rollBack();
    
    if (strpos($e->getMessage(), "Duplicate entry") !== false) {
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Email already registered"
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "An error occurred: " . $e->getMessage()
        ]);
    }
}
?>