<?php
require_once "koneksi.php";  // Pastikan koneksi sudah benar

// CORS settings
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get data from JSON body
    $data = json_decode(file_get_contents("php://input"), true);

    // Validate input
    if (empty($data['username']) || empty($data['password'])) {
        echo json_encode([
            "success" => false,
            "message" => "Username and password are required"
        ]);
        exit;
    }

    $username = $data["username"];
    $password = $data['password'];

    // Prepare SQL query to fetch user from the database
    $usernameQ = "SELECT * FROM dbo.[user] WHERE username = ?";

    // Use parameterized query to prevent SQL injection
    if ($stmt = sqlsrv_prepare($conn, $usernameQ, array(&$username))) {
        if (sqlsrv_execute($stmt)) {
            // Fetch the result
            $result = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);

            if ($result) {
                // Check if password matches the one in the database (plain text comparison)
                if ($result["password"] === $password) {
                    echo json_encode([
                        "success" => true,
                        "message" => "Login successful",
                        "user" => $result
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
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Error executing query"
            ]);
        }
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Error in query preparation"
        ]);
    }

    // Free the prepared statement
    sqlsrv_free_stmt($stmt);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method"
    ]);
}
?>