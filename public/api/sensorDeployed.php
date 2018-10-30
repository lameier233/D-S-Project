<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'sensorDeployedPost.php';
  exit;

}

$tdid = intval($_GET['turbineDeployedId'] ?? 0);
$sensorDeployedArr = SensorDeployed::fetchAll($tdid);
$json = json_encode($sensorDeployedArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
