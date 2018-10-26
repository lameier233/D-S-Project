var siteInfor = new Vue({
  el: '#siteMain',
  data: {
    site: [ ]
  },

  created () {
    const url = new URL(window.location.href);
    const clientId = url.searchParams.get('clientId');
    //console.log('Notes: '+ clientId);
    this.clientId = clientId;

    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('/api/site.php?clientId='+clientId)
    .then( response => response.json() )
    .then( json => {siteInfor.site = json} )
    .catch( err => {
      console.log('SITE FETCH ERROR:');
      console.log(err);
    })
  }
})
