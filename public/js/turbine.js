var turbineInfor = new Vue({
  el: '#turbineMain',
  data: {
    site: [ ]
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/turbine.php')
    .then( response => response.json() )
    .then( json => {turbineInfor.site = json} )
    .catch( err => {
      console.log('Turbine FETCH ERROR:');
      console.log(err);
    })
  }
})
