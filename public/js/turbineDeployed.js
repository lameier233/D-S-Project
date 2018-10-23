var turbineInfor = new Vue({
  el: '#turbineDeployedMain',
  data: {
    turbineDeployed: [ ]
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/turbineDeployed.php')
    .then( response => response.json() )
    .then( json => {turbineDeployed.turbineDeployed = json} )
    .catch( err => {
      console.log('Turbine Deployed FETCH ERROR:');
      console.log(err);
    })
  }
})
