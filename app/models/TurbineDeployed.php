<?php

class TurbineDeployed{
  public $turbineDeployedId;
  public $turbineId;
  public $siteId;
  public $serialId;
  public $deployedDate;
  public $totalFiredHours;
  public $totalStarts;
  public $lastPlannedOutageDate;
  public $lastUnplannedOutageDate;

  public function __construct($row) {
    $this->turbineDeployedId = isset($row['turbineDeployedId']) ? intval($row['turbineDeployedId']) : null;
    $this->turbineId = $row['turbineId'];
    $this->siteId = $row['siteId'];
    $this->serialId = $row['serialId'];
    $this->deployedDate = $row['deployedDate'];
    $this->totalFiredHours = $row['totalFiredHours'];
    $this->totalStarts = $row['totalStarts'];
    $this->lastPlannedOutageDate = $row['lastPlannedOutageDate'];
    $this->lastUnplannedOutageDate = $row['lastUnplannedOutageDate'];
  }


  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM turbineDeployed';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute();
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work object
      $newturbineDeployed =  new TurbineDeployed($row);
      array_push($arr, $newturbineDeployed);
    }
    // 4.b. return the array of work objects
    return $arr;
  }

}
