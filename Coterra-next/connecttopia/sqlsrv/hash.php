<?php
$newPassword = "123";  // Password baru
$hashedPassword = password_hash($newPassword, PASSWORD_BCRYPT);

echo "Hashed Password: " . $hashedPassword;
?>