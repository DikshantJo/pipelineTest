<?php
/**
 * Contact Form Handler
 *
 * This PHP script processes a basic HTML contact form.
 * It validates user input (name, email, message), sanitizes it,
 * and simulates sending an email (in real use, you'd use `mail()` or an SMTP library).
 * This is a foundational example of server-side form handling with security and clean code in mind.
 */

// Define an array to hold errors
$errors = [];

// Check if the form was submitted using POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Sanitize and validate the name
    $name = trim($_POST['name'] ?? '');
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    // Sanitize and validate the email
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required.";
    }

    // Sanitize and validate the message
    $message = trim($_POST['message'] ?? '');
    if (empty($message)) {
        $errors[] = "Message cannot be empty.";
    }

    // If no errors, simulate sending an email
    if (empty($errors)) {
        // Normally, you'd send the email here using mail() or an SMTP library
        // For demo purposes, we'll just echo a success message
        echo "<p>Thank you, <strong>" . htmlspecialchars($name) . "</strong>. Your message has been sent!</p>";
    } else {
        // Output errors
        foreach ($errors as $error) {
            echo "<p style='color: red;'>Error: " . htmlspecialchars($error) . "</p>";
        }
    }
}
?>
