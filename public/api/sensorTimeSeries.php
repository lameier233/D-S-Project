<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'sensorTimeSeriesPost.php';
  exit;

}

$sensorTimeSeriesArr = SensorTimeSeries::fetchAll();
$json = json_encode($sensorTimeSeriesArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
