<?php
echo "here!";

$client = new Client($_POST);

$work->create();

echo json_encode($client);
