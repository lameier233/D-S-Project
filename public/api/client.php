<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'clientPost.php';
  exit;

}

$sensorArr = Client::fetchAll();
$json = json_encode($clientArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
