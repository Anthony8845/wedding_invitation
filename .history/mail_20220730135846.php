<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name1 = $_POST['Guest1'];
$name2 = $_POST['Guest2'];
$name3 = $_POST['Guest3'];
$name4 = $_POST['Guest4'];
$comment = $_POST['Comment'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'mail.wedding2022.st8.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'wedding.2022@wedding2022.st8.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Y29q8mtbla'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('wedding.2022@wedding2022.st8.ru'); // от кого будет уходить письмо?
$mail->addAddress('antonio8845@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Список гостей:';
$mail->Body    = '' .$name1;  
$mail->Body    = '' .$name2; 
$mail->Body    = '' .$name3;
$mail->Body    = '' .$name4;
$mail->Body    = '' .$comment;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'good';
}
?>