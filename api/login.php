<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
header("Access-Control-Allow-Credentials: true");

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

include_once './config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (!$data || !isset($data->email) || !isset($data->password)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Email and password are required"
    ]);
    exit();
}

$email = htmlspecialchars($data->email);
$password = $data->password;

try {
    $query = "SELECT * FROM users WHERE email = :email LIMIT 1";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (password_verify($password, $user['password'])) {
            $companyData = null;
            if ($user['role'] === "employer") {
                $companyDataQuery = "SELECT * FROM companies WHERE user_id = :user_id";
                $companyDataStmt = $pdo->prepare($companyDataQuery);
                $companyDataStmt->bindParam(":user_id", $user['id']);
                $companyDataStmt->execute();
                $companyData = $companyDataStmt->fetch(PDO::FETCH_ASSOC);
            }

            $tokenData = [
                "id" => $user['id'],
                "email" => $user['email'],
                "role" => $user['role'],
                "company" => $companyData
            ];

            $token = base64_encode(json_encode($tokenData));

            http_response_code(200);
            echo json_encode([
                "status" => "success",
                "message" => "Login berhasil",
                "data" => $tokenData,
                "token" => $token
            ]);
        } else {
            http_response_code(401);
            echo json_encode([
                "status" => "error",
                "message" => "Email atau password salah"
            ]);
        }
    } else {
        http_response_code(401);
        echo json_encode([
            "status" => "error", 
            "message" => "Email atau password salah"
        ]);
    }

} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Terjadi kesalahan: " . $e->getMessage()
    ]);
}
?>