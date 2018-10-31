<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'turbinePost.php';
  exit;

}

$turbineId = intval($_GET['turbineId'] ?? 0);
$turbineArr = Turbine::fetchAll($turbineId);
$json = json_encode($turbineArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
