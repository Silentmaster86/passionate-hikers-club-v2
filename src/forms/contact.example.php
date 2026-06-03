<?php
// Rename this file to contact.php on your server.
// Do not commit contact.php with your real email/settings.

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = strip_tags(trim($_POST["name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"] ?? ""));

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please complete the form correctly.";
        exit;
    }

    $recipient = "your-email@example.com";
    $subject = "New message from Passionate Hikers Club";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: Passionate Hikers Club <your-email@example.com>\r\n";
    $email_headers .= "Reply-To: $name <$email>\r\n";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        header("Location: /contact?success=true");
        exit;
    }

    http_response_code(500);
    echo "Something went wrong. Please try again.";
}
