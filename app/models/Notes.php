<?php

class Notes
{
  public $noteId;
  public $clientId;
  public $note;

  public function __construct($data) {
    $this->noteId = isset ($data['noteId']) ? $data['noteId'] : null;
    $this->clientId = isset ($data['clientId']) ? $data['clientId'] : null;
    $this->note = $data['notes'];
  }

  public function create() {
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    $sql = 'INSERT INTO notes (clientId, note)
            VALUES (?, ?)';
    $statement = $db->prepare($sql);
    $success = $statement->execute([
      $this->clientId,
      $this->note
    ]);
    $this->noteId = $db->lastInsertId();
  }

  public static function fetchAll(int $clientId) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM notes WHERE clientId = ?';
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
