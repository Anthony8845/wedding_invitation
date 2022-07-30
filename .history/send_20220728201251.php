<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->isHTML(true);

$mail->setFrom('weddinginvitation@teleworm.us', 'Info');
$mail->addAddress('antonio8845@gmail.com');
$mail->Subject = 'Ответ на приглашение'

$body = '<h1>Список гостей:</h1>'

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> ' .$_POST['name'].'</p>'
}

if(!$mail->send()) {
    $message = 'error'
} else {
    '<img src="./img/VZvx.gif">'
}