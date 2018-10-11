<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'sitePost.php';
  exit;

}

$siteArr = Client::fetchAll();
$json = json_encode($siteArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
