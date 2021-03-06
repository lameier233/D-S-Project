var clientInfor = new Vue({
  el: '#clientMain',
  data: {
    client: [ ]
  },

  methods: {
    gotoNotes: function(c) {
      var pageToOpen = '/notes.html?clientId=' + c;
      window.open(pageToOpen, "_self");
    },

    gotoSite: function(c) {
  window.location = '/site.html?clientId=' + c;
    }
  },

  created () {
    // TODO: Fetch task-specific data
    // fetch('api/task?id=4')
    fetch('/api/client.php')
    .then( response => response.json() )
    .then( json => {clientInfor.client = json} )
    .catch( err => {
      console.log('CLIENT FETCH ERROR:');
      console.log(err);
    })
  }
})
