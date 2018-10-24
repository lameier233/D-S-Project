<?php

$note = new Notes($_POST);

$note->create();

echo json_encode($note);
