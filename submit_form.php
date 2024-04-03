<?php
echo "Script is being executed."; // Debug message

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Debugging output
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Message: " . $message . "<br>";
    
    // Process the form data (e.g., send an email, store in a database)
    // Example:
    if (mail("cindyrellaa6268@gmail.com", "New Message from Website", $message, "From: $name <$email>")) {
        // Email sent successfully
        echo "Email sent successfully."; // Debug message
        header("Location: thank_you.html");
        exit;
    } else {
        // Error sending email
        echo "Error sending email."; // Debug message
        exit;
    }
}
?>

