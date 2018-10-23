var sensorInfor = new Vue({
  el: '#sensorMain',
  data: {
    sensor: [ ]
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/sensor.php')
    .then( response => response.json() )
    .then( json => {sensorInfor.sensor = json} )
    .catch( err => {
      console.log('Sensor FETCH ERROR:');
      console.log(err);
    })
  }
})
