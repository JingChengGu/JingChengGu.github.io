<?php
  // Replace contact@example.com with your real receiving email address
  $receiving_email_address = 'jaesongu@gmail.com';

  // Check if the form was submitted
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form inputs
    $from_name = htmlspecialchars($_POST['name']);
    $from_email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Prepare the email headers
    $headers = "From: " . $from_name . " <" . $from_email . ">\r\n";
    $headers .= "Reply-To: " . $from_email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Prepare the email body
    $email_body = "You have received a new message from the contact form on your website.\n\n";
    $email_body .= "Here are the details:\n\n";
    $email_body .= "Name: " . $from_name . "\n";
    $email_body .= "Email: " . $from_email . "\n";
    $email_body .= "Subject: " . $subject . "\n";
    $email_body .= "Message:\n" . $message . "\n";

    // Send the email
    if (mail($receiving_email_address, $subject, $email_body, $headers)) {
      echo 'success';
    } else {
      echo 'error';
    }
  } else {
    echo 'error';
  }
?>
