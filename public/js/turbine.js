var turbineInfor = new Vue({
  el: '#turbineMain',
  data: {
    turbine: [ ]
  },

  created () {
    const url = new URL(window.location.href);
    const turbineId = url.searchParams.get('turbineId');

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/turbine.php?turbineId='+turbineId)
    .then( response => response.json() )
    .then( json => {turbineInfor.turbine = json} )
    .catch( err => {
      console.log('Turbine FETCH ERROR:');
      console.log(err);
    })
  }
})
