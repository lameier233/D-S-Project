var sensorTimeSeriesInfor = new Vue({
  el: '#sensorTimeSeriesMain',
  data: {
    sensorTimeSeries: [ ]
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/sensorTimeSeries.php')
    .then( response => response.json() )
    .then( json => {sensorTimeSeriesInfor.sensorTimeSeries = json} )
    .catch( err => {
      console.log('Sensor Time Series FETCH ERROR:');
      console.log(err);
    })
  }
})
