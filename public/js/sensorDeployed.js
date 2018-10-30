var sensorDeployedInfor = new Vue({
  el: '#sensorDeployedMain',
  data: {
    sensorDeployed: [ ]
  },

  created () {
    const url = new URL(window.location.href);
    const tdid = url.searchParams.get('turbineDeployedId');
    //console.log('Notes: '+ clientId);
    //this.turbineDeployedI = siteId;
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/sensorDeployed.php?turbineDeployedId=' + tdid)
    .then( response => response.json() )
    .then( json => {sensorDeployedInfor.sensorDeployed = json} )
    .catch( err => {
      console.log('Sensor Deployed FETCH ERROR:');
      console.log(err);
    })
  }
})
