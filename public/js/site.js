var siteInfor = new Vue({
  el: '#siteMain',
  data: {
    site: [ ]
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('../api/site.php')
    .then( response => response.json() )
    .then( json => {siteInfor.site = json} )
    .catch( err => {
      console.log('SITE FETCH ERROR:');
      console.log(err);
    })
  }
})
