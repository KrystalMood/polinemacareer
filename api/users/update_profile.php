<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

include_once "../config/db.php";

$headers = getallheaders();
$token = isset($headers["Authorization"]) ? str_replace("Bearer ", "", $headers["Authorization"]) : null;

if (!$token) {
    http_response_code(401);
    echo json_encode([
        "status" => "error",
        "message" => "Unauthorized"
    ]);
    exit;
}

$userData = json_decode(base64_decode($token), true);
$userId = $userData["id"];

$photoUploadDir = '../uploads/users/photos/';
$cvUploadDir = '../uploads/users/cv/';

if (!file_exists($photoUploadDir)) {
    error_log("Creating directory: " . $photoUploadDir);
    mkdir($photoUploadDir, 0755, true);
}

if (isset($_FILES['photo'])) {
    $photoFile = $_FILES['photo'];
    
    error_log("Photo upload details: " . json_encode($_FILES['photo']));
    
    $photoExt = pathinfo($photoFile['name'], PATHINFO_EXTENSION);
    $photoFileName = uniqid('photo_') . '.' . $photoExt;
    $photoPath = '/uploads/users/photos/' . $photoFileName;
    
    $uploadResult = move_uploaded_file(
        $photoFile['tmp_name'], 
        $photoUploadDir . $photoFileName
    );
    
    if (!$uploadResult) {
        error_log("Failed to move uploaded file. Error: " . error_get_last()['message']);
    }
}

if (isset($_FILES['cv'])) {
    $cvFile = $_FILES['cv'];
    $cvExt = pathinfo($cvFile['name'], PATHINFO_EXTENSION);
    $cvFileName = uniqid('cv_') . '.' . $cvExt;
    $cvPath = '/uploads/users/cv/' . $cvFileName;
    move_uploaded_file($cvFile['tmp_name'], $cvUploadDir . $cvFileName);
}

// Get profile data from JSON
$profileData = isset($_POST['data']) ? json_decode($_POST['data'], true) : [];

if (!$profileData) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid profile data"
    ]);
    exit;
}

try {
    $query = "UPDATE applicant_profiles SET 
              full_name = :full_name,
              gender = :gender,
              email = :email,
              phone = :phone,
              address = :address,
              birth_date = :birth_date,
              bio = :bio";

    if ($photoPath) {
        $query .= ", photo = :photo";
    }
    if ($cvPath) {
        $query .= ", cv = :cv";
    }

    $query .= " WHERE user_id = :user_id";
    
    $stmt = $pdo->prepare($query);
    
    $stmt->bindParam(":full_name", $profileData['fullName']);
    $stmt->bindParam(":gender", $profileData['gender']);
    $stmt->bindParam(":email", $profileData['email']);
    $stmt->bindParam(":phone", $profileData['phone']);
    $stmt->bindParam(":address", $profileData['address']);
    $stmt->bindParam(":birth_date", $profileData['birthDate']);
    $stmt->bindParam(":bio", $profileData['bio']);
    $stmt->bindParam(":user_id", $userId);

    if ($photoPath) {
        $stmt->bindParam(":photo", $photoPath);
    }
    if ($cvPath) {
        $stmt->bindParam(":cv", $cvPath);
    }

    if ($stmt->execute()) {
        http_response_code(200);
        echo json_encode([
            "status" => "success",
            "message" => "Profile updated successfully",
            "data" => [
                "photo" => $photoPath,
            ]
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Failed to update profile"
        ]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Database error: " . $e->getMessage()
    ]);
}
?>