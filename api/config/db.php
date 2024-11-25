<?php

$host = "localhost";
$database = "polinema_career";
$username = "root";
$password = "";

try {
    $pdo = new PDo("mysql:host=$host;dbname=$database", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    die();
}
