<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'sitePost.php';
  exit;

}

$clientId = intval($_GET['clientId'] ?? 0);

$siteArr = Site::fetchAll($clientId);
$json = json_encode($siteArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
