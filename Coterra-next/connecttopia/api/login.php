<?php
require_once "config/db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // $email = $conn->real_escape_string($data["email"]);
    $username = $conn->real_escape_string($data["username"]);
    $password = $data['password'];

    // $emailQ = "SELECT * FROM profile WHERE email = '$email' LIMIT 1";
    $usernameQ = "SELECT * FROM user WHERE username = '$username' LIMIT 1";

    // $emailResult = $conn->query($emailQ);
    $usernameResult = $conn->query($usernameQ);


    if (($usernameResult->num_rows === 1)) {
        // echo "connected";
        $userUsername = $usernameResult->fetch_assoc();

        if (md5($password) === $userUsername["password"]) {
            echo json_encode([
                "success" => true,
                "message" => "Login successful",
                "user" => $userUsername
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Invalid password"
            ]);
        }
    } else {
        echo json_encode([
            "success" => false,
            "message" => "User not found"
        ]);
    }
}
