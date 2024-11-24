<?php
require_once "config/db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    
    if (empty($data['username']) || empty($data['password'])) {
        echo json_encode([
            "success" => false,
            "message" => "Username dan password harus diisi"
        ]);
        exit;
    }

    $username = $conn->real_escape_string($data["username"]);
    $password = md5($data["password"]);

    $query = "SELECT u.*, r.nama_role 
              FROM user u 
              LEFT JOIN role r ON u.Role_idRole = r.idRole 
              WHERE u.username = ? 
              LIMIT 1";
              
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        
        if ($password === $user["password"]) {
            $profileQuery = "SELECT * FROM profile WHERE User_username = ?";
            $stmtProfile = $conn->prepare($profileQuery);
            $stmtProfile->bind_param("s", $username);
            $stmtProfile->execute();
            $profile = $stmtProfile->get_result()->fetch_assoc();
            
            echo json_encode([
                "success" => true,
                "message" => "Login berhasil",
                "user" => [
                    "username" => $user["username"],
                    "nama" => $user["nama"],
                    "role" => $user["nama_role"],
                    "email" => $profile["email"] ?? null,
                    "telepon" => $profile["telepon"] ?? null
                ]
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Password salah"
            ]);
        }
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Username tidak ditemukan"
        ]);
    }
    
    $stmt->close();
    if (isset($stmtProfile)) {
        $stmtProfile->close();
    }
    $conn->close();
}
?>