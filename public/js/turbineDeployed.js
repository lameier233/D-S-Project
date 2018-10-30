var turbineDeployedInfor = new Vue({
  el: '#turbineDeployedMain',
  data: {
    turbineDeployed: [ ]
  },

  methods: {
      gotoSensorDeployed: function(t) {
        window.location = '/sensorDeployed.html?turbineDeployed=' + t;
    }
  },

  created () {
      const url = new URL(window.location.href);
      const siteId = url.searchParams.get('siteId');
      //console.log('Notes: '+ clientId);
      this.siteId = siteId;

      // TODO: Fetch task-specific data
      // fetch('api/task?id=4')
      fetch('/api/turbineDeployed.php?siteId='+siteId)
      .then( response => response.json() )
      .then( json => {turbineDeployedInfor.turbineDeployed = json} )
      .catch( err => {
        console.log('TURBINE DEPLOYED FETCH ERROR:');
        console.log(err);
      })
    }
})
