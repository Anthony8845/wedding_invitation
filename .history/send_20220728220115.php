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
$mail->Subject = 'Ответ на приглашение';

$body = '<h1>Список гостей:</h1>';

if(trim(!empty($GET['name']))){
    $body.='<p><strong>Имя:</strong> ' .$GET['name'].'</p>';
}

if(!$mail->send()) {
    $message = 'error ';
} else {
    $message = '<img src="./img/VZvx.gif">';
}

$responce = ['message' => $message];

header('Content-type: application/json');
echo json_encode($responce);