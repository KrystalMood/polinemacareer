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

if (!$data || !isset($data['email']) || !isset($data['password']) || !isset($data['fullName']) || !isset($data['role'])) {
    http_response_code(400);

    echo json_encode([
        "status" => "error",
        "message" => "Data is missing"
    ]);
    exit();
}

if ($data['role'] === "job_seeker" && !isset($data['gender'])) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Gender is required for job seekers"
    ]);
    exit();
}

$gender = $data['role'] === "employer" ? null : $data['gender'];

$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$password = $data['password'];
$fullName = htmlspecialchars(strip_tags($data['fullName']));
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

$validGenders = ['male', 'female', null];

if (!in_array($gender, $validGenders)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid gender"
    ]);
    exit();
}

if ($role === "employer") {
    if (!isset($data['companyName']) || empty($data['companyName'])) {
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Company name is required for employer registration"
        ]);
        exit();
    }

    if (!isset($data['companyLocation']) || empty($data['companyLocation'])) {
        http_response_code(400);
        echo json_encode([
            "status" => "error",
            "message" => "Company location is required for employer registration"
        ]);
        exit();
    }
}

$companyName = null;
$companyLocation = null;
$companyDescription = null;
$employeeCount = null;
$openPositions = null;

if ($role === "employer") {
    $companyName = $data['companyName'];
    $companyLocation = $data['companyLocation'];
    $companyDescription = $data['companyDescription'];
    $employeeCount = $data['employeeCount'];
    $openPositions = $data['openPositions'];
}

try {
    $pdo->beginTransaction();
    
    $query = "INSERT INTO users (email, password, full_name, role, gender, created_at) 
              VALUES (:email, :password, :fullName, :role, :gender, NOW())";
    
    $stmt = $pdo->prepare($query);
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":password", $hashedPassword);
    $stmt->bindParam(":fullName", $fullName);
    $stmt->bindParam(":role", $role);
    $stmt->bindParam(":gender", $gender);
    
    $stmt->execute();
    $userId = $pdo->lastInsertId();

    if ($role === "employer") {
        $companyQuery = "INSERT INTO companies (user_id, name, location, description, employee_count, open_positions, created_at) 
                        VALUES (:user_id, :name, :location, :description, :employee_count, :open_positions, NOW())";
        
        $companyStmt = $pdo->prepare($companyQuery);
        $companyStmt->bindParam(":user_id", $userId);
        $companyStmt->bindParam(":name", $companyName);
        $companyStmt->bindParam(":location", $companyLocation);
        $companyStmt->bindParam(":description", $companyDescription);
        $companyStmt->bindParam(":employee_count", $employeeCount);
        $companyStmt->bindParam(":open_positions", $openPositions);
        
        $companyStmt->execute();
    }

    $pdo->commit();

    if ($role === "employer") {
        $companyDataQuery = "SELECT * FROM companies WHERE user_id = :user_id";
        $companyDataStmt = $pdo->prepare($companyDataQuery);
        $companyDataStmt->bindParam(":user_id", $userId);
        $companyDataStmt->execute();
        $companyData = $companyDataStmt->fetch(PDO::FETCH_ASSOC);
    }

    http_response_code(201);
    echo json_encode([
        "status" => "success",
        "message" => "Registration successful",
        "data" => [
            "user" => [
                "id" => $userId,
                "email" => $email,
                "fullName" => $fullName,
                "role" => $role,
                "gender" => $gender
            ],
            "company" => $role === "employer" ? $companyData : null
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