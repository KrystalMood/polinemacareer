<?php
require_once "config/db.php";

$response = [
    "status" => false,
    "message" => "Something went wrong",
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if all required fields are present in the JSON data
    if (
        !isset($data["nama"]) || !isset($data["email"]) || !isset($data["username"]) ||
        !isset($data["phone"]) || !isset($data["password"]) || !isset($data["confirmPassword"])
    ) {
        $response['message'] = 'All fields are requiredd.';
        echo json_encode($response);
        exit();
    }

    $nama = $data["nama"];
    $email = $data["email"];
    $username = $data["username"];
    $phone = $data["phone"];
    $password = md5($data["password"]);
    $confirmPassword = md5($data["confirmPassword"]);

    // Validate that no fields are empty
    if (empty($nama) || empty($email) || empty($username) || empty($phone) || empty($password) || empty($confirmPassword)) {
        $response['message'] = 'All fields are required.';
        echo json_encode($response);
        exit();
    }

    // Check if passwords match
    if ($password !== $confirmPassword) {
        $response['message'] = 'Passwords do not match.';
        echo json_encode($response);
        exit();
    }

    // Check for duplicate username
    $stmt = $conn->prepare("SELECT * FROM user WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $response['message'] = 'Username already exists.';
        echo json_encode($response);
        exit();
    }

    // Insert into database
    $stmt1 = $conn->prepare("INSERT INTO user (username, password, nama, Role_idRole) VALUES (?, ?, ?, ?)");
    $stmt2 = $conn->prepare("INSERT INTO profile (User_username,tanggal_daftar, telepon, email) VALUES (?, NOW(), ?, ?)");

    $role_id = 2; // Update role ID as needed
    $stmt1->bind_param("sssi", $username, $password, $nama, $role_id);
    $stmt2->bind_param("sss", $username, $phone, $email);

    if ($stmt1->execute() && $stmt2->execute()) {
        $response['status'] = true;
        $response['message'] = 'Registration successful';
    } else {
        $response['message'] = 'Registration failed';
    }

    $stmt1->close();
    $stmt2->close();
    $conn->close();
}

echo json_encode($response);
