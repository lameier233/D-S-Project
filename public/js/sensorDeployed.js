var sensorDeployedInfor = new Vue({
  el: '#sensorDeployedMain',
  data: {
    sensorDeployed: [ ]
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/sensorDeployed.php')
    .then( response => response.json() )
    .then( json => {sensorDeployedInfor.sensorDeployed = json} )
    .catch( err => {
      console.log('Sensor Deployed FETCH ERROR:');
      console.log(err);
    })
  }
})
