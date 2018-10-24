<?php
require '../../app/common.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'notesPost.php';
  exit;
}

$clientId = intval($_GET['clientId'] ?? 0);

$noteArr = Notes::fetchAll($clientId);

$json = json_encode($noteArr, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
