<?php
class PHP_Email_Form {
    public $to;
    public $from_name;
    public $from_email;
    public $subject;
    public $message;
    public $ajax = false;

    public function send() {
        // Basic validation
        if (empty($this->to) || empty($this->from_name) || empty($this->from_email) || empty($this->subject) || empty($this->message)) {
            return 'Error: Incomplete data';
        }

        $headers = "From: {$this->from_name} <{$this->from_email}>\r\n";
        $headers .= "Reply-To: {$this->from_email}\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        // Attempt to send the email
        $result = mail($this->to, $this->subject, $this->message, $headers);

        if ($result) {
            return 'Success: Email sent';
        } else {
            return 'Error: Email not sent';
        }
    }

    public function add_message($value, $label, $lines = 0) {
        $this->message .= "<p><strong>{$label}:</strong><br>{$value}</p>";
    }
}
?>
