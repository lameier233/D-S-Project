<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'turbineDeployedPost.php';
  exit;

}

$turbineDeployedArr = TurbineDeployed::fetchAll();
$json = json_encode($turbineDeployedArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
