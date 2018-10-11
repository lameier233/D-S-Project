<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'sensorPost.php';
  exit;

}

$sensorArr = Sensor::fetchAll();
$json = json_encode($sensorArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
