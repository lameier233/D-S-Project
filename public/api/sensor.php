<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'sensorPost.php';
  exit;

}

$sensorId = intval($_GET['sensorId'] ?? 0);
$sensorArr = Sensor::fetchAll($sensorId);
$json = json_encode($sensorArr, JSON_PRETTY_PRINT);

header('Content-Type: application/jso$clientId = intval($_GET['clientId'] ?? 0);n');
echo $json;
