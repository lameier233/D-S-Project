<?php

class SensorTimeSeries
{
  public $primaryId;
  public $sensorDeployedId;
  public $dataCollectedDate;
  public $output;
  public $heatrate;
  public $compressorEfficiency;
  public $availability;
  public $reliability;
  public $firedHours;
  public $trips;
  public $starts;

  public function __construct($row) {
    $this->primaryId = isset($row['primaryId']) ? intval($row['primaryId']) : null;
    $this->sensorDeployedId = $row['sensorDeployedId'];
    $this->dataCollectedDate = $row['dataCollectedDate'];
    $this->output = $row['output'];
    $this->heatrate = $row['heatrate'];
    $this->compressorEfficiency = $row['compressorEfficiency'];
    $this->availability = $row['availability'];
    $this->reliability = $row['reliability'];
    $this->firedHours = $row['firedHours'];
    $this->starts = $row['starts'];
  }


  public static function fetchAll($sid) {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);
    // 2. Prepare the query
    $sql = 'SELECT * FROM sensorTimeSeries WHERE sensorDeployedId = ?';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute([$sid]);
    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {

      // 4.a. For each row, make a new work object
      $newSensorTimeSeries =  new SensorTimeSeries($row);
      array_push($arr, $newSensorTimeSeries);
    }
    // 4.b. return the array of work objects
    return $arr;
  }

}
