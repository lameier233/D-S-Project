var sensorDeployedInfor = new Vue({
  el: '#sensorDeployedMain',
  data: {
    sensor: [ ]
  },

  methods: {
      gotoSensor: function(s) {
        window.location = '/sensor.html?turbineDeployed=' + s;
    }
  },
  created () {
      const url = new URL(window.location.href);
      const siteId = url.searchParams.get('sensorId');
      //console.log('Notes: '+ clientId);
      //this.sensorId = sensorId;
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/sensorDeployed.php?sensorId=' + siteId)
    .then( response => response.json() )
    .then( json => {sensorDeployedInfor.sensor = json} )
    .catch( err => {
      console.log('Sensor FETCH ERROR:');
      console.log(err);
    })
  }
})
