<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'sensorTimeSeriesPost.php';
  exit;

}

$sensorId = intval($_GET['sensorId'] ?? 0);
$sensorTimeSeriesArr = SensorTimeSeries::fetchAll($sensorId);
$json = json_encode($sensorTimeSeriesArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
