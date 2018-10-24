<?php

class Notes
{
  public $id;
  public $clientId;
  public $notes;

  public function __construct($data) {
    $this->id = isset ($data['id']) ? $data['id'] : null;
    $this->clientId = isset ($data['clientId']);
    $this->comment = $data['comment'];
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT Notes (clientId, note)
            VALUES (?, ?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->clientId,
      $this->note
    ]);
    $this->id = $db->lastInsertId();
  }

  public static function fetchAll(int $clientId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Notes WHERE clientId = ?';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute(
      [$clientId]
    );

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $newNotes =  new Notes($row);
      array_push($arr, $newNotes);
    }

    return $arr;
  }

}
