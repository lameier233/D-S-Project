<?php

class SensorDeployed
{
  public $sensorDeployedId;
  public $sensorId;
  public $turbineDeployed;
  public $serialNumber;
  public $deployedDate;

  public function __construct($row) {
    $this->sensorDeployedId = isset($row['sensorDeployedId']) ? intval($row['sensorDeployedId']) : null;
    $this->sensorId = $row['sensorId'];
    $this->turbineDeployed = $row['turbineDeployed'];
    $this->serialNumber = $row['serialNumber'];
    $this->deployedDate = $row['deployedDate'];
  }


  public static function fetchAll($tdid) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM sensorDeployed WHERE turbineDeployed = ?';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute([$tdid]);
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work object
      $newSensorDeployed =  new SensorDeployed($row);
      array_push($arr, $newSensorDeployed);
    }
    // 4.b. return the array of work objects
    return $arr;
  }

}
