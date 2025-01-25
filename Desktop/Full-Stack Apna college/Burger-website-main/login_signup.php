<?php
include 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'];

    if ($action == 'login') {
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Validate login credentials
        $sql = "SELECT * FROM login WHERE username='$username' AND password='$password'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "Login successful!";
            // You can redirect the user to another page
            // header('Location: home.html');
        } else {
            echo "Invalid username or password.";
        }
    } elseif ($action == 'signup') {
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Check if username already exists
        $sql = "SELECT * FROM login WHERE username='$username'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "Username already exists.";
        } else {
            // Insert new user
            $sql = "INSERT INTO login (fullname, email, username, password) VALUES ('$fullname', '$email', '$username', '$password')";

            if ($conn->query($sql) === TRUE) {
                echo "Signup successful!";
                // You can redirect the user to the login page
                // header('Location: index.html');
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }
}

$conn->close();
?>
