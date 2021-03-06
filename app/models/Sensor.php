<?php

class Sensor
{
  public $sensorId;
  public $sensorName;
  public $sensorDescription;
  public $manufacturer;
  public $totslLifeExpectancyHours;

  public function __construct($row) {
    $this->sensorId = isset($row['sensorId']) ? intval($row['sensorId']) : null;
    $this->sensorName = $row['sensorName'];
    $this->sensorDescription = $row['sensorDescription'];
    $this->manufacturer = $row['manufacturer'];
    $this->totslLifeExpectancyHours = $row['totslLifeExpectancyHours'];
  }


  public static function fetchAll($sid) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM sensor WHERE sensorId = ?';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute([
      $sid
    ]);
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work object
      $newSensor =  new Sensor($row);
      array_push($arr, $newSensor);
    }
    // 4.b. return the array of work objects
    return $arr;
  }

}
