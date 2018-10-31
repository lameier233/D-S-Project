var sensorInfor = new Vue({
  el: '#sensorMain',
  data: {
    sensor: [ ]
  },

  created () {
    const url = new URL(window.location.href);
    const sensor = url.searchParams.get('turbineDeployed');
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/sensor.php?sensorId=' + sensor)
    .then( response => response.json() )
    .then( json => {sensorInfor.sensor = json} )
    .catch( err => {
      console.log('Sensor FETCH ERROR:');
      console.log(err);
    })
  }
})
