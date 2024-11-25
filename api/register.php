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

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['email']) || !isset($data['password']) || !isset($data['fullName']) || !isset($data['gender']) || !isset($data['role'])) {
    http_response_code(400);

    echo json_encode([
        "status" => "error",
        "message" => "Data is missing"
    ]);
    exit();
}

$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$password = $data['password'];
$fullName = htmlspecialchars(strip_tags($data['fullName']));
$role = htmlspecialchars(strip_tags($data['role']));
$gender = htmlspecialchars(strip_tags($data['gender']));

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

$validGenders = ['male', 'female'];

if (!in_array($gender, $validGenders)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid gender"
    ]);
    exit();
}

try {
    $checkQuery = "SELECT * FROM users WHERE email = :email LIMIT 1";
    $checkStmt = $pdo->prepare($checkQuery);
    $checkStmt->bindParam(":email", $email);
    $checkStmt->execute();

    if ($checkStmt->rowCount() > 0) {
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Email already exists"
        ]);
        exit();
    }

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $query = "INSERT INTO users (email, password, full_name, role, gender) VALUES (:email, :password, :fullName, :role, :gender)";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":password", $hashedPassword);
    $stmt->bindParam(":fullName", $fullName);
    $stmt->bindParam(":role", $role);
    $stmt->bindParam(":gender", $gender);

    if ($stmt->execute()) {
        $userId = $pdo->lastInsertId();

        http_response_code(201);
        echo json_encode([
            "status" => "success",
            "message" => "User registered successfully",
            "userId" => [
                "id" => $userId,
                "email" => $email,
                "fullName" => $fullName,
                "role" => $role,
            ]
        ]);
    } else {
        throw new Exception("Failed to register user");
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Database error: " . $e->getMessage()
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Internal server error: " . $e->getMessage()
    ]);
}
?>