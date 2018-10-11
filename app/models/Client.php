<?php

class Client
{
  public $clientId;
  public $clientName;
  public $clientDescription;
  public $gicSubIndustry;
  public $headquarters;

  public function __construct($row) {
    $this->clientid = isset($row['clientId']) ? intval($row['clientId']) : null;
    $this->clientName = $row['clientName'];
    $this->clientDescription = $row['clientDescription'];
    $this->gicSubIndustry = $row['gicSubIndustry'];
    $this->headquarters = $row['headquarters'];
  }


  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM client';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work object
      $newClient =  new Client($row);
      array_push($arr, $newClient);
    }
    // 4.b. return the array of work objects
    return $arr;
  }

}
